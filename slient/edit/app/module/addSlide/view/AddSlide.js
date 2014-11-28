define(['libs/backbone', '../modal/AddSlide'],
function(Backbone, AddSlideModal) {
	'use strict';

	return Backbone.View.extend({
		className: 'add-slide',

		events: {
			// 'click': '_showAddSlideModal',
			'click': '_addSlide',
		},

		initialize: function() {
			this.addModal = new AddSlideModal();
			$('#modals').append(this.addModal.render());
		},

		_showAddSlideModal: function(e){
			this.addModal.show();
		},

		_addSlide: function(){
			// this.slideIndex = 1;
			this.model.addSlide();
		},

		render: function() {
			this.$el.html('+');
			return this.$el;
		},

		constructor: function AddSlide() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});
});