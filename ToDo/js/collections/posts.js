define([
  'Backbone',
  'postModel'
], function (Backbone, postModel) {
    postCollection = Backbone.Collection.extend({
        //localStorage: new Store("posts"),
        model: postModel

    });
    return postCollection
});