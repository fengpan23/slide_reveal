define(['libs/backbone',
// 		'strut/logo_button/LogoView',
// 		'strut/presentation_generator/view/PreviewButton',
// 		'./ThemeProviderView',
// 		'strut/user_config/ConfigBtn',
// //		'./Tablets',
// 		'strut/search_add/Search',
// 		'strut/animation/Animat',
// 		'css!styles/edit/header/header.css',
		],
function(Backbone, LogoView, PreviewButton, ThemeProviderView, ConfigBtn, Search, Animat, empty) {
	return Backbone.View.extend({
		className: 'header',

		initialize: function() {
			this._template = JST['header/Header'];
			// this._logoButton = new LogoView({editorModel: this.model.editorModel()});
			// this._previewButton = 
			// 	new PreviewButton({editorModel: this.model.editorModel()});
			// this._themeProviderView = new ThemeProviderView({editorModel: this.model.editorModel()});

			// this._configBtn = new ConfigBtn();

			// this.model.editorModel().on('change:activeMode', this._modeChanged, this);
//			this._tablets = new Tablets(this.model.editorModel());
			this._buttons = this.model.get('createCompButtons');
		},

		// create component buttons
		render: function() {
			this.$el.html(this._template());
			
			this._buttons.forEach(function(button){
				this.$el.find('.head-tool').append(button.render().$el);
			}, this);

			//add display button
			this.$el.find('.head-tool').append('<div class="btn head-display"><a class="icon-play" href="http://n01.lxpt.cn:49318/edit.html#deck/5407ccf47df7525a68000001"  target="_blank"></a></div>');

			// add show menu
			// this.$el.find('.header_left').append(this._previewButton.render().$el);
			
			// var $createCompButtons = this.$el.find('.header_center > div');

			// //add theme menu
			// $createCompButtons.append(this._themeProviderView.render().$el);
			
			// //add textbox, table, image, video, audio, ifream and shape menu
			// this.model.get('createCompButtons').forEach(function(button) {
			// 	$createCompButtons.append(button.render().el);
			// }, this);
			
			
			// //add slide show and overview btn
			// this.model.get('modeButtons').forEach(function(button) {
			// 	if(button.modeId === 'slide-editor'){
			// 		$createCompButtons.append(button.render().el);
			// 	}else{
			// 		this.$el.find('.actBtn').append(button.render().el);
			// 	}
			// }, this);

			
			// this.$el.find('.header_right').append(this._configBtn.render().el);

			// var searchModel = new Search(this.model._editorModel._deck);
			// this.$el.find('.header_right').append(searchModel.render().$el);

			// var animat = new Animat(this.model._editorModel._deck);
			// this.$el.find('.header_right').append(animat.render().$el);
			//var $generatorButton = this.$el.find('.preview-generator-button');
			

//			this._tablets.render();
//			this.$el.append(this._tablets.$el);

			return this.$el;
		},

		constructor: function HeaderView() {
			Backbone.View.prototype.constructor.apply(this, arguments);
		}
	});
});