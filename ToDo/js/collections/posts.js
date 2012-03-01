define([
  'Backbone',
  'postModel'
], function (Backbone, postModel) {
    postCollection = Backbone.Collection.extend({
        localStorage: new Store("posts"),
        model: postModel,
        //fuktion som filtrerar ut poster med en viss tagg
        filterTags: function () {
            var model = this.models;
            //är ingen tagg vald så ska poster med None som tagg visas
            var selected = $("#taglist input:radio:checked").val();
            if (selected == undefined)
                selected = "None";
            var filter = this.filter(function (model) {
                return model.get("Tag") == selected;
            });
            //rensar den gamla listan..
            $("#todolist").html("");
            //..och loopar sedan igenom den nya listan och lägger in i #todolist
            _.each(filter, function (model) {
                view = new TodoListViewEntry({ model: model });
                view.render();
                $("#todolist").append(view.el);
                model.save();
            });
        },
         //funktion som sorterar listan efter olika typer
        majorSortFunction: function (type) {
            var model = this.models;
            var sort = this.sortBy(function (model) {
                //är typen Prio så sorteras den i omvänd ordning så högst prio hamnar högst upp
                if (type == "Prio")
                    return -model.get(type);
                else {
                    var str = model.get(type);
                    str = str.toLowerCase();
                    str = str.split("");
                    return str;
                }
            });
            //rensar den gamla listan..
            $("#todolist").html("");
            //..och loopar sedan igenom den nya listan och lägger in i #todolist
            _.each(sort, function (model) {
                view = new TodoListViewEntry({ model: model });
                view.render();
                $("#todolist").append(view.el);
                model.save();
            });
        },
     });
    return postCollection
});