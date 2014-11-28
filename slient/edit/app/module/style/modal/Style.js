define(['libs/backbone'],
function(Backbone) {
	return Backbone.View.extend({
		className: "style modal",
		events: {
			"click .ok": "okClicked",
			"click .close": "_hide",
		},

		initialize: function() {
			// this.loadItem = _.debounce(this.loadItem.bind(this), 200);
		},

		show: function() {
			this.$el.removeClass('top-out').addClass('top-in');
			$('body').append('<div class="modal-backdrop"></div>')
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
			this.$el.removeClass('top-in').addClass('top-out');
			$('body').find('.modal-backdrop').fadeOut('500').remove();
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
