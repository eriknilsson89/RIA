define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',    // lib/backbone/backbone
  'appView',
  'postCollection'
], function ($, _, Backbone, appView, Posts) {
    AppRouter = Backbone.Router.extend({
        routes: {
            "": "main",
            "main": "main"
        },
        collections: {},
        views: {},
        initialize: function () {
            _.bindAll(this, 'main');
            posts = new Posts;
            posts.url = '/todo';
            posts.fetch();
            this.collections.posts = posts;

            appview = new appView({ todoPosts: posts });
            $("#container").append(appView.el);
            this.views.main = appview
        },
        main: function () {
            this.setBody(this.views.main);
            this.view.render();
        },
        setBody: function (view) {
            if (typeof this.view != 'undefined') {
                this.view.unrender();
            }
            this.view = view;
            $("#container").append(view.el);
        }
    });
    return AppRouter;
});