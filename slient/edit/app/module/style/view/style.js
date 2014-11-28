define(['libs/backbone', 'lang', '../modal/Style'],
function(Backbone, lang, StyleModal) {
	return Backbone.View.extend({
		className: 'btn head-style',
		events: {
			click: '_showModal'
		},
		initialize: function() {
			delete this.options;
			this.modal = new StyleModal();
			$('#modals').append(this.modal.render());
		},
		_showModal: function() {
			this.modal.show();
		},
		render: function() {
			this.$el.html('<span class="icon-quill" title='+ lang.style +'></span><span class="btn-content">'+ lang.style +'</span>');
			return this;
		},
		constructor: function StyleView() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		},
	});
});