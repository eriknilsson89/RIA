define([
    'jQuery',
    'Underscore',
    'Backbone',
    'AppRouter'
], function ($, _, Backbone, AppRouter) {
    return {
        initialize: function () {
            this.router = new AppRouter
            Backbone.history.start()
        }
    };
});