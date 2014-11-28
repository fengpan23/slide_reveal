define(["./ComponentView"],
	function(ComponentView) {

		/**
		 * @class WebFrameView
		 * @augments ComponentView
		 */
		return ComponentView.extend({
			className: "component webFrameView",

			events: function() {
				var myEvents, parentEvents;
                parentEvents = ComponentView.prototype.events();
                myEvents = {
                    'click': '_clicked',
                };
                return _.extend(parentEvents, myEvents);
			},
			/**
			 * Initialize WebFrameView component view.
			 */
			initialize: function() {
				ComponentView.prototype.initialize.apply(this, arguments);

				this.$el.css('z-index', zTracker.next1());
			},

			_clicked: function(e){
				this.$el.css('z-index', zTracker.next1());
				this.$el.trigger("focused");
				e.stopPropagation();
				return false;
			},

			/**
			 * Render element based on component model.
			 *
			 * @returns {*}
			 */
			render: function() {
				var $frame, scale;
				ComponentView.prototype.render.call(this);
				$frame = $("<iframe width='960' height='768' src=" + (this.model.get('src')) + "></iframe>");
				this.$el.find(".content").append($frame);
				this.$el.append('<div class="overlay"></div>');
				scale = this.model.get('scale');
				this.$el.css({
					width: 960 * scale.x,
					height: 768 * scale.y
				});
				return this.$el;
			}
		});
	});