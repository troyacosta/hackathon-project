'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var EmployeeCollection = require('./collections/employeeCollection.js');
var EmployeeModel = require('./models/employeeModel.js');
var _ = require('backbone/node_modules/underscore/underscore-min.js');

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
    var employeeCollection = new EmployeeCollection();
     function addNewEmployee(model) {
        $('.employeeInfo').append('<li><a id="a'+model.get('id')+'"href="#employee/'+model.get('id')+'">'+model.attributes.name+'</a></li>');
     }
     employeeCollection.on('add', addNewEmployee);
     employeeCollection.fetch();
    
    function singleEmployeeInfo(model) {
        console.log('test');
        $('.employeeInfo').append('<li>'+this.model.attributes.pay+'</li>');
        console.log(this);
    }
    employeeCollection.on('click', this.singleEmployeeInfo, this);

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
