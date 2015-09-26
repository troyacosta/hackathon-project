// 'use strict';
// var Backbone = require('backbone');
// var _ = require('backbone/node_modules/underscore');
// var $ = ('jquery');
// var EmployeeCollection = require('../collections/employeeCollection.js');
// var templateHTML = '<span><%= name %></span>';
// var EmployeeModel = require('../models/employeeModel.js');


// module.exports = Backbone.View.extend({
// 	tagName: 'div',
// 	template: _.template(templateHTML),
// 	el: $('.name'),
// 	intialize: function() {
// 		_.bindAll(this,
// 			'render');
// 		this.model.on('change', this.render);
// 		console.log('test2');
// 		this.render();
		
// 	},
// 	render: function() {
// 		console.log('rendered')
// 		this.collection.each(function(model) {
// 			var html = this.template(model.toJSON());
// 		this.$el.html(this.model.get('name'));
// 		});
// 	}
// });

