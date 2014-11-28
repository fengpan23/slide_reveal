define(['./view/AddSlide',
		'./model/AddSlide',
	],
	function(AddSlideView, AddSlideModel) {
		'use strict';

		var service = {
			createProvider: function(editorModel) {
				return new AddSlideView({model: new AddSlideModel(editorModel)});
			}
		};

		return {
			initialize: function(registry) {
				registry.register({
					interfaces: 'strut.AddSlideProvider'
				}, service);
			}
		}
	});