define([

    'order!libs/backbone/backbone-min',
    'order!libs/localstorage/localstorage-min'
    
], function () {
    _.noConflict();
    $.noConflict();
    return Backbone.noConflict();
});