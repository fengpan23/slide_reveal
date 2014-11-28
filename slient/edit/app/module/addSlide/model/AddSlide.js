define(['libs/backbone'],
	function(Backbone) {
		'use strict';

		return Backbone.Model.extend({
			addSlide: function(index){
				this._editModel.addSlide(index);
			},

			constructor: function AddSlideModel(editModel) {
				this._editModel = editModel;
				Backbone.Model.prototype.constructor.call(this);
			}
		});
	});