define(['./view/Style',
		'./model/Style',
		'lang'
	],
	function(StyleView, StyleModel, lang) {
		'use strict';

		var service = {
			createProvider: function(editorModel) {
				return new StyleView({model: new StyleModel(editorModel)});
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