define([
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function (_, Backbone) {
    var tagModel = Backbone.Model.extend({
        defaults: {
            ID: -1,
            Text: "none"
        }
    });

    return tagModel;
});