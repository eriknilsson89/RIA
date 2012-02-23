define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function ($, _, Backbone) {
    TodoListViewEntry = Backbone.View.extend({
        tagName: 'li',
        initialize: function (options) {
            this.template = _.template("<span class='text'></span><span class='prio'></span><input type='text' class='editText' value='' /><select class='editPrio'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select><span class='createdAt'>Skapad " + this.model.get('Date') + "</span><span class='tag'></span><span class='remove'> X</span><span class='edit'> EDIT</span><span class='done hidden'> DONE</span>");
            _.bindAll(this, "remove", "handleDelete", "edit");
            options.model.bind('change', this.render, this);
            options.model.bind('destroy', this.remove);
        },
        render: function () {
            $(this.el).html(this.template(this.model.toJSON));
            this.setText();
        },
        events: {
            "click .remove": "handleDelete",
            "click .edit": "edit",
            "click .done": "doneUpdate"
        },
        remove: function (e) {
            $(this.el).remove();
        },
        handleDelete: function (e) {
            this.model.destroy();
        },
        setText: function () {
            var text = this.model.get("Text");
            var prio = this.model.get("Prio");
            var tag = this.model.get("Tag");
            this.$(".text").text(text);
            this.$(".prio").text(prio);
            this.$(".tag").text(tag);
        },
        edit: function (e) {
            this.textspan = this.el.childNodes[0];
            this.selector = this.el.childNodes[1];
            this.inputfield = this.el.childNodes[2];
            this.prioselect = this.el.childNodes[3];
            this.removespan = this.el.childNodes[6];
            this.editspan = this.el.childNodes[7];
            this.donespan = this.el.childNodes[8];

            $(this.textspan).addClass("hidden");
            $(this.selector).addClass("hidden");
            $(this.removespan).addClass("hidden");
            $(this.editspan).addClass("hidden");
            this.inputfield.setAttribute("value", this.textspan.innerHTML);
            $(this.inputfield).focus();
            $(this.inputfield).addClass("editing");
            $(this.prioselect).addClass("editing");
            $(this.donespan).removeClass("hidden");
        },
        doneUpdate: function (e) {
            this.model.save({ Text: $(this.inputfield).val(), Prio: $(this.prioselect).val() });
            $(this.inputfield).removeClass("editing");
            $(this.textspan).removeClass("hidden");
            $(this.selector).removeClass("hidden");
            $(this.removespan).removeClass("hidden");
            $(this.editspan).removeClass("hidden");
            $(this.donespan).removeClass("hidden");

        }
    });
    return TodoListViewEntry;
});