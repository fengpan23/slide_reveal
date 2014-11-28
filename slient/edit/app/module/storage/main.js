define(['./view/Storage',
		'./model/Storage',
		'./StorageInterface',
		'lang'
	],
	function(StorageView, StorageModel, StorageInterface, lang) {
		'use strict';

		var storageInterface = null;

		var service = {
			createProvider: function(editorModel) {
				return new StorageView({model: new StorageModel()});
			}
		};

		return {
			initialize: function(registry) {
				storageInterface = new StorageInterface(registry);
				registry.register({
					interfaces: 'strut.MenuProvider'
				}, service);

				registry.register({
					interfaces: 'strut.StorageInterface'
				}, storageInterface)
			}
		}
	});