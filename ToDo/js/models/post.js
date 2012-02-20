define([
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function (_, Backbone) {
    var postModel = Backbone.Model.extend({
        defaults: {
            ID: -1,
            Text: "Kom ihåg",
            Prio: 1,
            Date: Date
        }
    });
    
    return postModel;
});