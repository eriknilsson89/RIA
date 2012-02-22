define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',    // lib/backbone/backbone
  'baseView',
  'todoView',
  'TodoListViewEntry'
], function ($, _, Backbone, baseView, todo, TodoListViewEntry) {
    appView = baseView.extend({
        el: $("#content"),
        initialize: function (options) {
            //this.template = _.template('<input id="new-todo" placeholder="What needs to be done?" type="text" /><select id="prio"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select><button id="submit">Spara</button>');
            this.todoList = options.todoPosts;
        },
        render: function () {
            //$(this.el).html(this.template);
            todoListView = new todo({ collection: this.todoList });
            todoListView.render();
            this.$(this.el).html(todoListView.el);
        }
    });
    return appView
});