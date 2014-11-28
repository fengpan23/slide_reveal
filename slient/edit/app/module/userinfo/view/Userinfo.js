define(['libs/backbone', 'lang', '../modal/Userinfo'],
function(Backbone, lang, UserinfoModal) {
	return Backbone.View.extend({
		className: 'btn-r head-userinfo',
		events: {
			click: '_showModal'
		},
		initialize: function() {
			delete this.options;
			this.modal = new UserinfoModal();
			$('#modals').append(this.modal.render());
		},
		_showModal: function() {
			this.modal.show();
		},
		render: function() {
			var username = "小伙子";
			this.$el.html('<span class="icon-setting" title='+ lang.setting +'></span><span class="btn-content" title="'+ username +'">'+ username +'</span>');
			return this;
		},
		constructor: function StyleView() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		},
	});
});