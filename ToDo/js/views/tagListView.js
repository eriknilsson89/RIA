define([
  'jQuery',     // lib/jquery/jquery
  'Underscore', // lib/underscore/underscore
  'Backbone',   // lib/backbone/backbone
  'tagCollection',
  'tagModel'
], function ($, _, Backbone, tagCollection, tagModel) {
    tagListView = Backbone.View.extend({
        el: $("#taglistdiv"),
        initialize: function (options) {
            //två olika templates
            this.ulTemplate = _.template('<form id="taglist"></form>');
            this.inputTemplate = _.template('<input type="text" placeholder="Skapa ny tagg" id="new-tag" /><button id="tagSubmit">Skapa tagg</button>');
            _.bindAll(this, 'render', 'addAll', 'addOne', 'newTag');
            this.collection.bind('add', this.addOne);
        },
        render: function () {
            $(this.el).append(this.inputTemplate);
            $(this.el).append(this.ulTemplate);
            //lägger in data
            this.addAll();
            return this;
        },
        addAll: function () {
            this.collection.each(this.addOne);
        },
        addOne: function (model) {
            //Skapar ny radio-button
            view = new tagListViewEntry({ model: model });
            view.render();
            //skapar en p-tagg som radio button och span innehållandes namnet på taggen ska ligga i
            var p = document.createElement("p");
            p.appendChild(view.el);
            $(p).append("<span>" + model.get("Text") + "</span>");
            //lägger till p-taggen i diven
            this.$("#taglist").append(p);
            model.save();
        },
        newTag: function (e) {
            //kollar först om taggen redan finns, isf visas en alert och det hela avbryts
            if (!this.collection.doesTagnameExist(this.$("#new-tag").val())) {
            	//kollar om taggen är tom
            	if (!this.isTagnameEmpty(this.$("#new-tag").val())) {
            		this.collection.add(new tagModel({ Text: this.$("#new-tag").val() }));
            	}
            	else {
            		alert("Taggen har ingen text!");
            	}
            }
            else {
                alert("Du har redan denna tagg!");
            }
            this.$("#new-tag").val("");
        },
        events: {
            "click #tagSubmit": "newTag"
        },
        //funktion som kollar om tagg-namnet är tomt
        isTagnameEmpty: function (tagName) {
        	if (tagName == "" || tagName == null) {
        		return true;
        	}
            return false;
        }
    });
    return tagListView;
});