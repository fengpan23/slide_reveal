define(['libs/backbone'],
function(Backbone) {
	return Backbone.View.extend({
		className: "share modal",
		events: {
			"click .ok": "okClicked",
			"hide": "_hide",
		},

		initialize: function() {
			// this.loadItem = _.debounce(this.loadItem.bind(this), 200);
		},

		show: function() {
			this.$el.show().removeClass('top-out').addClass('top-in');
		},

		okClicked: function(e) {
			e.stopPropagation();
			e.preventDefault();
			if (!this.$el.find(".ok").hasClass("disabled")) {
				if (this.file != null) {
					this.cb({
						file: this.file,
						src: this.src
					});
				} else {
					this.cb(this.src);
				}
				return this.$el.modal('hide');
			}
		},
		
		hidden: function() {
			this.$el.find(".ok").addClass("disabled");
			if (this.$input != null) {
				this.item.src = '';
				this.file = null;
				return this.$input.val("");
			}
		},

		_hide: function(){
			this.$el.addClass('top-out');
		},

		render: function() {
			this.$el.html(JST["module/style/StyleModal"]);
			return this.$el;
		},

		constructor: function LinkModal() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});
});
