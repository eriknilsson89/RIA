define([
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function (_, Backbone) {
    var tagModel = Backbone.Model.extend({
    	validate:function(inText) {
			if (inText.Text == "" || inText.Text == null) {
				return "empty string";
			}
		},
        defaults: {
            Text: "none"
        }
    });
    
    return tagModel;
});