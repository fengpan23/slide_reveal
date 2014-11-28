define(['./view/Frame',
		'./model/Frame',
		'lang'
	],
	function(ImageView, ImageModel, lang) {
		'use strict';

		var service = {
			getProvider: function() {
				return {
					text: lang.frame,
					icon: 'icon-image',
					type: 'Frame'
				};
			}
		};

		return {
			initialize: function(registry) {
				registry.register({
					interfaces: 'strut.UnitProvider'
				}, service);

				registry.register({
					interfaces: 'strut.ComponentModel',
					meta: {
						type: 'Frame'
					}
				}, FrameModel);

				registry.register({
					interfaces: 'strut.ComponentView',
					meta: {
						type: 'Frame'
					}
				}, FrameView);
			}
		}
	});