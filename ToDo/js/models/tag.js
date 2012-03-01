define([
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function (_, Backbone) {
    var tagModel = Backbone.Model.extend({
        defaults: {
            Text: "none"
        }
    });

    return tagModel;
});