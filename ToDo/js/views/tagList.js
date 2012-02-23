define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',   // lib/backbone/backbone
  'tagCollection',
  'tagModel'
], function ($, _, Backbone, tagCollection, tagModel) {
    tagListView = Backbone.View.extend({
        el: $("#content"),
        initialize: function (options) {
            this.ulTemplate = _.template('<form id="taglist"></form>');
            this.inputTemplate = _.template('<input type="text" placeholder="create new tag" id="new-tag" /><button id="tagSubmit">Skapa tagg</button>');
            _.bindAll(this, 'render', 'addAll', 'addOne', 'newTag');
            this.collection.bind('add', this.addOne);
        },
        render: function () {
            $(this.el).append(this.ulTemplate);
            $(this.el).append(this.inputTemplate);
            this.addAll();
            return this;
        },
        addAll: function () {
            this.collection.each(this.addOne);
        },
        addOne: function (model) {
            view = new tagListViewEntry({ model: model });
            view.render();
            this.$("#taglist").append(view.el);
            this.$("#taglist").append("<span>" + model.get("Text") + "</span>");
            model.save();
        },
        newTag: function (e) {
            if (!this.doesTagnameExist(this.$("#new-tag").val())) {
                this.collection.add(new tagModel({ Text: this.$("#new-tag").val() }));
            }
            else {
                alert("Du har redan denna tagg!");
            }
            this.$("#new-tag").val("");
        },
        events: {
            "click #tagSubmit": "newTag"
        },
        doesTagnameExist: function (tagName) {
            for (var i = 0; i < this.collection.length; i++) {
                if (this.collection.models[i].get("Text").toLowerCase() === tagName.toLowerCase())
                    return true;
            }
            return false;
        }
    });
    return tagListView;
});