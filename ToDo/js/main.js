require.config({
    paths: {
        jQuery: 'libs/jquery/jquery',
        Underscore: 'libs/underscore/underscore',
        Backbone:   'libs/backbone/backbone',
        postModel: 'models/post',
        postCollection: 'collections/posts',
        todoView: 'views/todo',
        TodoListViewEntry: 'views/TodoListViewEntry',
        baseView: 'views/baseView',
        appView: 'views/appView',
        AppRouter: 'router'
    }
});
require(['app'], function (App) {
    App.initialize();
});