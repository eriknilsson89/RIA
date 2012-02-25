define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',    // lib/backbone/backbone
  'appView',
  'postCollection',
  'tagCollection'
], function ($, _, Backbone, appView, Posts, Tags) {
    AppRouter = Backbone.Router.extend({
        routes: {
            "": "main",
            "main": "main"
        },
        collections: {},
        views: {},
        initialize: function () {
            _.bindAll(this, 'main');
            //skapar nya collections och plockar ut data som finns lagrat och ger till dem
            posts = new Posts;
            posts.fetch();
            this.collections.posts = posts;
            tags = new Tags;
            tags.fetch();
            this.collections.tags = tags;

            appview = new appView({ todoPosts: posts, todoTags: tags });
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