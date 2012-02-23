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
            this.selectTemplate = _.template('<select id="taglist"></select>');
            this.inputTemplate = _.template('<input type="text" placeholder="create new tag" id="new-tag" /><button id="tagSubmit">Skapa tagg</button>');
            _.bindAll(this, 'render', 'addAll', 'addOne', 'newTag');
            this.collection.bind('add', this.addOne);

        },
        render: function () {
            $(this.el).append(this.selectTemplate);
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
            model.save();
        },
        newTag: function (e) {
            this.collection.add(new tagModel({ Text: this.$("#new-tag").val() }));
            this.$("#new-tag").val("");
        },
        events: {
            "click #tagSubmit": "newTag"
        }
    });
    return tagListView;
});