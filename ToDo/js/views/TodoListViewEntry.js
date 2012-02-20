define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function ($, _, Backbone) {
    TodoListViewEntry = Backbone.View.extend({
        initialize: function (options) {
            this.template = _.template("<ul><li><span class='text'>{{Text}}</span><span class='prio'>{{Prio}}</span><span class='createdAt'>Skapad {{Date}}</span><span class='remove'>X</span></li></ul>");
            _.bindAll(this, "remove", "handleDelete");
            options.model.bind('change', this.render, this);
            options.model.bind('destroy', this.remove);
        },
        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
        },
        events: {
            "click .remove": "handleDelete"
        },
        remove: function () {
            $(this.el).remove();
        },
        handleDelete: function (e) {
            this.model.destroy();
        }
    });
    return TodoListViewEntry;
});