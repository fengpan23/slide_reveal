define(['../../ComponentView',
		'app/deck/ComponentCommands',
		'communal/undo_support/CmdListFactory'],
	function(ComponentView, ComponentCommands, CmdListFactory) {

		var undoHistory = CmdListFactory.managedInstance('editor');
		/**
		 * @class ImageView
		 * @augments ComponentView
		 */
		return ComponentView.extend({
			className: "component image",
			tagName: "div",

			events: function() {
                var myEvents, parentEvents;
                parentEvents = ComponentView.prototype.events();
                myEvents = {
                    "deltadragStart span[data-delta='size']": "sizeStart",
					"deltadrag span[data-delta='size']": "size",
					"deltadragStop span[data-delta='size']": "sizeStop",
                };
                return _.extend(parentEvents, myEvents);
            },
			/**
			 * Initialize Image component view.
			 */
			initialize: function() {
				ComponentView.prototype.initialize.apply(this, arguments);

				this.model.on('change:src', this._srcChanged, this);
				this.model.on('change:width', this._widthChanged, this);

				this._toolTemplate = JST['unit/image/ComponentTool'];
			},

			/**
			 * Render element based on component model.
			 *
			 * @returns {*}
			 */
			render: function() {
				ComponentView.prototype.render.call(this);

				var url = this.model.get('src');
				if (url) {
					this.$img = $('<img src="' + url + '">');
				} else {
					this.$img = $('<div class="icon-picture"></div>');
				}
				this.$img.css({
					width: this.model.get('width')
				});
				this.$content.html(this.$img);
				return this.$el;
			},

			_srcChanged: function(model, url){
				if(this.$img.hasClass('icon-picture')){
					this.$img = $('<img src="' + url + '">');
					this.$content.html(this.$img);
					return;
				}
				this.$img.attr('src', url);
			},

			_widthChanged: function(model, width){
				this.$img.width(width);
			},

			sizeStart: function(){
				this.dragStartSize = {};
				this._initialWidth = this.model.get('width') || this.$img.width();
				this._initialX = this.model.get('x');
				this._initialY = this.model.get('y');

				this.dragStartSize.width = this._initialWidth;
				this.dragStartSize.x = this._initialX;
				this.dragStartSize.y = this._initialY;
			},

			size: function(e, deltas){
				var correction = deltas.dx/Math.cos(45);
				if($(e.currentTarget).hasClass('br')){
					this.model.set('width', this._initialWidth + correction);
				}else if($(e.currentTarget).hasClass('bc')){
					this.model.set('y', this._initialY - deltas.dy/2);
					this.model.set('width', this._initialWidth + deltas.dy);
				}else if($(e.currentTarget).hasClass('bl')){
					this.model.set('x', this._initialX + correction);
					this.model.set('width', this._initialWidth - correction);
				}else if($(e.currentTarget).hasClass('cl')){
					this.model.set('x', this._initialX + deltas.dx);
					this.model.set('y', this._initialY + deltas.dx/2);
					this.model.set('width', this._initialWidth - deltas.dx);
				}else if($(e.currentTarget).hasClass('cr')){
					this.model.set('y', this._initialY - deltas.dx/2);
					this.model.set('width', this._initialWidth + deltas.dx);
				}else if($(e.currentTarget).hasClass('tl')){
					this.model.set('x', this._initialX + correction);
					this.model.set('y', this._initialY + correction);
					this.model.set('width', this._initialWidth - correction);
				}else if($(e.currentTarget).hasClass('tc')){
					this.model.set('y', this._initialY + deltas.dy);
					this.model.set('x', this._initialX + deltas.dy/2);
					this.model.set('width', this._initialWidth - deltas.dy);
				}else if($(e.currentTarget).hasClass('tr')){
					this.model.set('y', this._initialY - correction);
					this.model.set('width', this._initialWidth + correction);
				}else{
					console.log('be careful, drag change image size error!');
				}
			},

			sizeStop: function(){
				undoHistory.pushdo(new ComponentCommands.Size(this.dragStartSize, this.model));
			}

		});
	});