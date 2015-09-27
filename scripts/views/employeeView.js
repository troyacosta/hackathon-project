'use strict';
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var $ = require('jquery');


module.exports = Backbone.View.extend({
	tagName:'section',
	template: _.template($('#employeeView').html()),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});


