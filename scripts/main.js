'use strict';
var $ = require('jquery');
var Backbone = require('backbone');

$(document).ready(function() {
	
    var $logIn = $('#logIn');
    var $loginForm = $('.loginForm');
    var $home = $('#home');
    var $employees = $('#employees');
    var $singleEmployee = $('#singleEmployee');
    var $editEmployeeInfo = $('#editEmployeeInfo');
    var $addNewEmployee = $('#addNewEmployee');
    var $all = $('.all');

   // $all.hide();

    $loginForm.on('submit', function(event) {
		event.preventDefault();
	});

    var Router = Backbone.Router.extend({
        routes: {
            'logIn': 'logIn',
            'home': 'home',
            'employees': 'employees',
            'singleEmployee': 'singleEmployee',
            'editEmployeeInfo': 'editEmployeeInfo',
            'addNewEmployee': 'addNewEmployee'
        },
        logIn: function() {
        	$all.hide;
        	$loginForm.show();
        },
        home: function() {
        	$all.hide();
            $home.show();
        },
        employees: function() {
        	$all.hide();
        	$employees.show();
        }
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
        	$editEmployeeInfo.show();
        }
    });
    var router = new Router;

    Backbone.history.start();
});
