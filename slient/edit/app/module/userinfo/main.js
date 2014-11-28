define(['./view/Userinfo',
		'./model/Userinfo',
		'lang'
	],
	function(UserinfoView, UserinfoModel, lang) {
		'use strict';

		var service = {
			createProvider: function(editorModel) {
				return new UserinfoView({model: new UserinfoModel(editorModel)});
			}
		};

		return {
			initialize: function(registry) {
				registry.register({
					interfaces: 'strut.MenuProvider'
				}, service);
			}
		}
	});