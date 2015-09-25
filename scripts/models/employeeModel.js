
var Backbone = require('backbone');

//creates the backbone employee model
module.exports = Backbone.Model.extend({
    defaults: {
        name: '',
        dept: '',
        yrs_employed: null,
        position: '',
        status: '',
        pay: ''
    },
    idAttribute: '',
    urlRoot: ''
});