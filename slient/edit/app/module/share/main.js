define(['./view/Share',
		'./model/Share',
		'lang'
	],
	function(ShareView, ShareModel, lang) {
		'use strict';

		var service = {
			createProvider: function(editorModel) {
				return new ShareView({model: new ShareModel()});
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