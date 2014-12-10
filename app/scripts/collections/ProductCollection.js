define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	/* Return a collection class definition */
	/** @namespace Backbone.Collection */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log('initialize a Product collection');
		},

		filterByText: function(text) {
			console.log('filter by text');

			text = text ? text.toLowerCase() : '';

			return _.filter(this.models,
				function(model){

					var result = false;

					_.each(model.attributes, function(attribute) {
						if(attribute && attribute.toLowerCase().indexOf(text) > -1) {
							result = true;
							return false; //break
						}
					},this);

					return result;
				});
		}
	});
});
