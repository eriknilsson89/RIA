define([
  'Backbone',
  'tagModel'
], function (Backbone, tagModel) {
    tagCollection = Backbone.Collection.extend({
        localStorage: new Store("tags"),
        model: tagModel

    });
    return tagCollection
});