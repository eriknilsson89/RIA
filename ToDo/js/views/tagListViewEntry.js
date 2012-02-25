define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function ($, _, Backbone) {
    tagListViewEntry = Backbone.View.extend({
        tagName: 'input',
        initialize: function (options) {
            //sätter två attribut på el
            $(this.el).attr("type", "radio");            
            $(this.el).attr("name", "tag");
            _.bindAll(this);
            options.model.bind('change', this.render, this);
            options.model.bind('destroy', this.remove);
        },
        render: function () {
            //lägger till attributet value med taggens namn
            $(this.el).attr("value", this.model.get("Text"));
        },
        events: {
            "click .removeTag": "handleDelete",
        },
        handleDelete: function (e) {
            this.model.destroy();
        },
        remove: function (e) {
            $(this.el).remove();
        }
    });
return tagListViewEntry;
});