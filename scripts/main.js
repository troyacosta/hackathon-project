'use strict';
var $ = require('jquery');
var Backbone = require('backbone');

$(document).ready(function() {
	var $logIn = $('#logIn');
    var $homePage = $('#homePage');
    var $employees = $('#employees');
    var $singleEmployee = $('#singleEmployee');
    var $editEmployeeInfo = $('#editEmployeeInfo');
    var $addNewEmployee = $('#addNewEmployee');
    var $all = $('.all');

    $all.hide();

    $('#logOnForm').on('submit', function(event) {
		event.preventDefault();
	});

    var Router = Backbone.Router.extend({
        routes: {
            'homePage': 'homePage',
            'employees': 'employees',
            'singleEmployee': 'singleEmployee',
            'editEmployeeInfo': 'editEmployeeInfo',
            'addNewEmployee': 'addNewEmployee'
        },
        logIn: function() {
        	$all.hide;
        	$loginForm.show();
        },
        homePage: function() {
        	$all.hide();
            $homePage.show();
            $logIn.hide();
        },
        employees: function() {
        	$employees.show();
        },
        singleEmployee: function() {
        	$singleEmployee.show();
        },
        editEmployeeInfo: function() {
        	$editEmployeeInfo.show();
        },
        addNewEmployee: function() {
        	$all.hide();
        	$editEmployeeInfo.show();
        }
    });
    var router = new Router;

    Backbone.history.start();
});
