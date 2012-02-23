define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',   // lib/backbone/backbone
  'postCollection',
  'postModel'
], function ($, _, Backbone, postCollection, postModel) {
    todoListView = Backbone.View.extend({
        el: $("#content"),
        initialize: function (options) {
            this.ulTemplate = _.template('<ul id="todolist"></ul>');
            this.formTemplate = _.template('<input id="new-todo" placeholder="What needs to be done?" type="text" /><select id="prio"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select><button id="submit">Spara</button>');
            this.sortTemplate = _.template('<div id="sortDiv"><span id="sortByAlph">Sortera i bokstavsordning </span><span id="sortByPrio">Sortera efter prioritet </span><span id="sortByTag">Sortera efter tagg </span></div>');
            _.bindAll(this, 'render', 'addAll', 'addOne', 'newPost');
            this.collection.bind('add', this.addOne);

        },
        render: function () {
            $(this.el).html(this.formTemplate);
            $(this.el).append(this.ulTemplate);
            $(this.el).append(this.sortTemplate);
            this.addAll();
            return this;
        },
        addAll: function () {
            this.collection.each(this.addOne);
        },
        addOne: function (model) {
            view = new TodoListViewEntry({ model: model });
            view.render();
            $("#todolist").append(view.el);
            model.save();
        },
        newPost: function (e) {
            var currentTime = new Date();
            var month = currentTime.getMonth() + 1;
            var fulltime = currentTime.getDate() + "/" + month + " " + currentTime.getHours() + ":" + currentTime.getMinutes();
            this.collection.add(new postModel({ Text: this.$("#new-todo").val(), Prio: this.$("#prio").val(), Date: fulltime, Tag: this.getTag() }));
            this.$("#prio").val("");
            this.$("#new-todo").val("");
        },
        getTag: function () {
            if ($("#taglist input:radio:checked").val() == undefined) {
                return "None";
            }
            return $("#taglist input:radio:checked").val();
        },
        events: {
            "click #submit": "newPost",
            "click #sortByPrio": "sortByPrio",
            "click #sortByTag": "sortByTag",
            "click #sortByAlph": "sortByName"
        },
        sortByPrio: function () {
            this.majorSortFunction("Prio");
        },
        sortByTag: function () {
            this.majorSortFunction("Tag");
        },
        sortByName: function () {
            this.majorSortFunction("Text");

        },
        majorSortFunction: function (type) {
            var model = this.collection.models;
            var alphabetic = this.collection.sortBy(function (model) {
                return model.get(type);
            });
            $("#todolist").html("");
            _.each(alphabetic, function (model) {
                view = new TodoListViewEntry({ model: model });
                view.render();
                $("#todolist").append(view.el);
                model.save();
            });
            this.currentSort = type;
        },
        currentSort: "Text"
    });
    return todoListView;
});