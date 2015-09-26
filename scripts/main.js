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
    


    $logOnForm.on('submit', function(event) {
        event.preventDefault();
    });
    $all.hide();
    var Router = Backbone.Router.extend({
        routes: {
            '': 'login',
            'homePage': 'homePage',
            'employees': 'employees',
            'editEmployeeInfo': 'editEmployeeInfo',
            'addNewEmployee': 'addNewEmployee',
            'logOut': 'logIn',
            'employee/:id': 'showIndividual' 
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
        editEmployeeInfo: function() {
            $all.hide();
            $editEmployeeInfo.show();
        },
        addNewEmployee: function() {
            $all.hide();
            $addEmployeeInfo.show();
        },
        showIndividual: function() {
            $all.hide();
            $singleEmployee:show();
        }
    });

    var router = new Router;
    Backbone.history.start();

    var employeeCollection = new EmployeeCollection();
     function addNewEmployee(model) {
        $('.names').append('<div class="col-sm-4 staff"><a id="a'+model.get('id')+'"href="#employee/'+model.get('id')+'">'+model.get('name')+'</a><br>'+model.get('position')+'</div>');
     }
     employeeCollection.on('add', addNewEmployee);
     employeeCollection.fetch();
     $all.hide();

     function singleEmployeeInfo(model) {
        $('#singleEmployee').append('<div class="individual">'+model.get('name')+'</div>');
     }
     employeeCollection.on('click', singleEmployeeInfo);
    
    

    














});
