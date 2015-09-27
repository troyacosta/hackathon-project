'use strict';
var Backbone = require('backbone');

//creates the backbone employee model
module.exports = Backbone.Model.extend({
    defaults: {
        name: '',
        dept: '',
        yrs_employed: null,
        position: '',
        status: '',
        pay: '',
        days_left: null
    },
    idAttribute: 'id',
    urlRoot: 'https://secure-fjord-5088.herokuapp.com/'

});

