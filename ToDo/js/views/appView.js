define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',    // lib/backbone/backbone
  'baseView',
  'todoView',
  'TodoListViewEntry'
], function ($, _, Backbone, baseView, todo, TodoListViewEntry) {
    appView = baseView.extend({
        initialize: function (options) {
            this.template = _.template("<div id='content'></div>");
            this.todoList = options.todoPosts;
        },
        render: function () {
            $(this.el).html(this.template);
            todoListView = new todo({ collection: this.todoList });
            todoListView.render();
            this.$("#content").html(todoListView.el);
        }
    });
    return appView
});