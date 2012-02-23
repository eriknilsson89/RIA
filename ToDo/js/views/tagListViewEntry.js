define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function ($, _, Backbone) {
    tagListViewEntry = Backbone.View.extend({
        tagName: 'option',
        className: 'tag',
        initialize: function (options) {
            this.template = _.template("<span>"+this.model.get("Text")+"</span>");
            _.bindAll(this);
            options.model.bind('change', this.render, this);
            options.model.bind('destroy', this.remove);
        },
        render: function () {
            $(this.el).html(this.template(this.model.toJSON));
        },
        events: {

        }
    });
return tagListViewEntry;
});