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
    var $logOnForm = $('#logOnForm');
    var $all = $('.all');

    $all.hide();

    $logOnForm.on('submit', function(event) {
		event.preventDefault();
	});

    var Router = Backbone.Router.extend({
        routes: {
        	'': 'login',
            'homePage': 'homePage',
            'employees': 'employees',
            'singleEmployee': 'singleEmployee',
            'editEmployeeInfo': 'editEmployeeInfo',
            'addNewEmployee': 'addNewEmployee',
            'logOut': 'logIn',
        },
        logIn: function() {
        	$all.hide();
        	$logIn.show();
        },
        homePage: function() {
        	$all.hide();
            $homePage.show();
            $logIn.hide();
        },
        employees: function() {
        	$all.hide();
        	$employees.show();
        },
        singleEmployee: function() {
        	$all.hide();
        	$singleEmployee.show();
        },
        editEmployeeInfo: function() {
        	$all.hide();
        	$editEmployeeInfo.show();
        },
        addNewEmployee: function() {
        	$all.hide();
        	$addEmployeeInfo.show();
        }
    });
    var router = new Router;

    Backbone.history.start();
});
