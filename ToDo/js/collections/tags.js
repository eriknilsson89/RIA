define([
  'Backbone',
  'tagModel'
], function (Backbone, tagModel) {
    tagCollection = Backbone.Collection.extend({
        localStorage: new Store("tags"),
        model: tagModel,
        //funktion som kollar om tagg-namnet redan finns
        doesTagnameExist: function (tagName) {
            for (var i = 0; i < this.length; i++) {
                if (this.models[i].get("Text").toLowerCase() === tagName.toLowerCase())
                    return true;
            }
            return false;
        }
    });
    return tagCollection
});