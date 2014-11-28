define(['libs/backbone'],
function(Backbone) {
	var previous = null;

	var Modal = Backbone.View.extend({
		className: "toolbar-panel",
		events: {
			"click .panel-item": "_selected",
		},
		initialize: function() {

		},

		show: function(e, data, cb) {
			this.$contents.empty();
			var _this = this;
			data.forEach(function(item){
				_this.$contents.append('<div class="panel-item">'+ item +'</div>')
			});
			this.cb = cb;
			this.$el.animate({top: e.clientY- this.$el.height()/2}, 'fast');
			this.$el.show();

			var _this = this;
	      	$('body').bind('mousedown.toolbar-panel', function(e) {
		        var target = e.target || e.srcElement;
		        if ($(target).not('.toolbar-panel *').size()) {
			        _this.hidden();
		        	$(this).unbind('mousedown.toolbar-panel');
		        }
	      	});
		},
		_selected: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var selectVal = $(e.currentTarget).html();
			this.cb(selectVal);
			this.hidden();
		},
		
		hidden: function() {
			this.$el.hide();
		},
		render: function() {
			this.$contents = $('<div class="content-list"></div>');
			this.$el.html(this.$contents);
			return this.$el;
		},
		constructor: function ToolbarPanel() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});

	return {
		get: function() {
			if (!previous) {
				previous = new Modal();
				$('#modals').append(previous.render());
			}
			return previous;
		},

		ctor: Modal
	};
});
