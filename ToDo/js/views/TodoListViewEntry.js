define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function ($, _, Backbone) {
    TodoListViewEntry = Backbone.View.extend({
        tagName: 'li',
        initialize: function (options) {
            this.template = _.template("<span class='text'>" + this.model.get('Text') + "</span><span class='prio'>" + this.model.get('Prio') + "</span><span class='createdAt'>Skapad " + this.model.get('Date') + "</span><span class='remove'>X</span>");
            _.bindAll(this, "remove", "handleDelete");
            options.model.bind('change', this.render, this);
            options.model.bind('destroy', this.remove);
        },
        render: function () {
            $(this.el).html(this.template(this.model.toJSON));
        },
        events: {
            "click .remove": "handleDelete"
        },
        remove: function (e) {
            $(this.el).remove();
        },
        handleDelete: function (e) {
            this.model.destroy();
        }
    });
    return TodoListViewEntry;
});