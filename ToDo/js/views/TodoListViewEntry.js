define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone'    // lib/backbone/backbone
], function ($, _, Backbone) {
    TodoListViewEntry = Backbone.View.extend({
        tagName: 'li',
        initialize: function (options) {
            //en template innehållandes text-element för posten, ett edit-fält(dolt från början), en prio-span, 
            //en prio-selectlista för redigering, datum-span, en tagg-span, en ta bort-span, 
            //en redigera-span och en done-span (vid redigering)
            this.template = _.template("<p class='text'></p><span class='prio'></span><input type='text' class='editText' value='' /><select class='editPrio'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select><span class='createdAt'>Skapad " + this.model.get('Date') + "</span><span class='tag'></span><span class='remove'> TA BORT</span><span class='edit'> REDIGERA</span><span class='done hidden'> DONE</span>");
            _.bindAll(this, "remove", "handleDelete", "edit");
            options.model.bind('change', this.render, this);
            options.model.bind('destroy', this.remove);
        },
        render: function () {
            //lägger till den nya li-taggen som får med datan till modellen
            $(this.el).html(this.template(this.model.toJSON));
            //skriver ut text för postens innehåll, prio och taggen
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
        //funktion som sätter text för posten, prio och taggen
        setText: function () {
            var text = this.model.get("Text");
            var prio = this.model.get("Prio");
            var tag = this.model.get("Tag");
            this.$(".text").text(text);
            this.$(".prio").text("Prioritet: "+prio);
            this.$(".tag").text("Tag: "+tag);
        },
        edit: function (e) {
            //vid edit ska man dölja och visa olika element. plockar först ut de behövliga elementen
            this.textspan = this.el.childNodes[0];
            this.selector = this.el.childNodes[1];
            this.inputfield = this.el.childNodes[2];
            this.prioselect = this.el.childNodes[3];
            this.removespan = this.el.childNodes[6];
            this.editspan = this.el.childNodes[7];
            this.donespan = this.el.childNodes[8];
            //döljer sedan vissa och visar vissa genom att ta bort och lägga till klassen hidden
            $(this.textspan).addClass("hidden");
            $(this.selector).addClass("hidden");
            $(this.removespan).addClass("hidden");
            $(this.editspan).addClass("hidden");
            //sätter postens text i den input-tagg som nu visas
            this.inputfield.setAttribute("value", this.textspan.innerHTML);
            $(this.inputfield).focus();
            $(this.inputfield).addClass("editing");
            $(this.prioselect).addClass("editing");
            $(this.donespan).removeClass("hidden");
        },
        doneUpdate: function (e) {
            //när redigeringen är klar så sparas uppdateringarna och klasser ändras igen
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