define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',   // lib/backbone/backbone
  'postCollection',
  'postModel'
], function ($, _, Backbone, postCollection, postModel) {

    todoListView = Backbone.View.extend({
        initialize: function (options) {
            this.template = _.template('<input id="new-todo" placeholder="What needs to be done?" type="text" /><select id="prio"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select><button id="submit">Spara</button>');
            _.bindAll(this, 'render', 'addAll', 'addOne', 'newPost');
            this.collection.bind('add', this.addOne);
        },
        render: function () {
            $(this.el).html(this.template);
            this.addAll();
            return this;
        },
        addAll: function () {
            this.collection.each(this.addOne);
        },
        addOne: function (model) {
            view = new TodoListViewEntry({ model: model });
            view.render();
            this.$("#todolist").append(view.el);
            model.save();
        },
        newPost: function (e) {
            var t = this.$("#new-todo").val();
            var p = this.$("#prio").val();
            this.collection.add(new postModel({ Text: t, Prio: p }));

        },
        events: {
            "click #submit": "newPost"
        }
    });
    return todoListView;
});