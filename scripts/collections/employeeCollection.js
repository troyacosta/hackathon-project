var Backbone = require('backbone');
var EmployeeModel = require('../collections/employeeCollection.js');
module.exports = Backbone.Collection.extend({
	model: EmployeeModel,
	url: ''
});

