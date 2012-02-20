define([
  'jQuery',     // lib/jquery/jquery
  'Backbone'    // lib/backbone/backbone
], function ($, Backbone) {
    BaseView = Backbone.View.extend({
        unrender: function () {
            $(this.el).detach();
        }
    });
    return BaseView;
});