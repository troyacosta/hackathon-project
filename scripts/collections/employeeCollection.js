var Backbone = require('backbone');
var EmployeeModel = require('../models/employeeModel.js');
module.exports = Backbone.Collection.extend({
	model: EmployeeModel,
	url: 'https://secure-fjord-5088.herokuapp.com/employees'
});

