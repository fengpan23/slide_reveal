define(['./ComponentView', 'circlePlayer/circle.player', './Mixers', 'tantaman/web/interactions/TouchBridge'],
	function(ComponentView, circlePlayer, Mixers, TouchBridge) {
		/**
		 * @class audioView
		 * @augments ComponentView
		 */
		return ComponentView.extend({
			className: 'component audioView',

			events: function() {
                var myEvents, parentEvents;
                parentEvents = ComponentView.prototype.events();
                myEvents = {
                    'mouseenter': '_playerCreate',
                    'click': '_clicked',
                    // 'mouseout': 'loseFocus',
                };
                return _.extend(parentEvents, myEvents);
            },
            /**
             * Initialize audioView component view.
             */
            initialize: function() {
                ComponentView.prototype.initialize.apply(this, arguments);

                this._playerCreate = this._playerCreate.bind(this);
                this._playerDestroy = this._playerDestroy.bind(this);

                this.$el.css('z-index', zTracker.next1());
            },

            _clicked: function(e){
                this.$el.css('z-index', zTracker.next1());
                this.$el.trigger("focused");
                e.stopPropagation();
                return false;
            },
            
            _playerCreate: function(){
                if (this.mycirclePlayer) {
                    var time = this.$el.find('.jp-duration').html();
                    this.model.set('time', time);
                    return;
                };
                
                this.mycirclePlayer = new CirclePlayer('#jquery_jplayer_'+ this.model.cid, {
                        m4a: this.model.get('src')
                    }, {
                        cssSelectorAncestor: '#cp_container_'+ this.model.cid,
                        swfPath: 'js',
                        wmode: 'window',
                        title: '.mName',
                        currentTime: '.jp-current-time',
                        duration: '.jp-duration',
                        keyEnabled: false
                    });
            },
            _playerDestroy: function(){
                if(this.mycirclePlayer){
                    this.mycirclePlayer.destroy();
                    delete this.mycirclePlayer;
                }
            },
            /**
             * Remove component view.
             *
             * @param {boolean} disposeModel Whether or not to dispose component's model as well.
             */
            remove: function(disposeModel) {
                $(window).off('focus');
                $(window).off('blur');
                this._playerDestroy();
                ComponentView.prototype.remove.apply(this, arguments);
            },
			/**
			 * Render element based on component model.
			 *
			 * @returns {*}
			 */
			render: function() {
				ComponentView.prototype.render.call(this);
                $(window).on('blur', this._playerDestroy);
                $(window).on('focus', this._playerCreate);
                this.$content.empty();
			    this.template = JST["strut.slide_components/AudioTool"](this.model);
                this.$el.css({
                    width: 240,
                    height: 60
                });
                this.$content.html(this.template);
                this.$el.find('.label,.mark,.line').hide();
				return this.$el;
			}
		});
	});
