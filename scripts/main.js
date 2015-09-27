'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var EmployeeCollection = require('./collections/employeeCollection.js');
var EmployeeModel = require('./models/employeeModel.js');
var _ = require('backbone/node_modules/underscore/underscore-min.js');
var EmployeeView = require("./views/employeeView");
var employeeCollection = new EmployeeCollection();

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
            $addNewEmployee.show();
        },
        showIndividual: function(id) {
            $all.hide();
            $singleEmployee.show();

            var eId = parseInt(id);
            var employee = employeeCollection.findWhere({id: eId});

            singleEmployeeInfo(employee);
        }
    });

    var router = new Router;
    Backbone.history.start();

     function printEmployees(model) {
        $('.names').append('<section class=col-sm-4 col-lg-3 staff><a id=a'+model.get('id')+' href="#employee/'+model.get('id')+'">'+model.get('name')+'</a><br>'+model.get('position')+'</section>');
     }
     employeeCollection.on('add', printEmployees);
     employeeCollection.fetch();
     $all.hide();

     function singleEmployeeInfo(model) {
        var employeeView = new EmployeeView({model:model});
        $('#singleEmployee').html('');
        $('#singleEmployee').append(employeeView.$el);
     }
     
     function addNewEmployee(e) {
        e.preventDefault();
        employeeCollection.add({
            name: $('#newName').val(),
            dept: $('#newDept').val(),
            position: $('#newPosition').val(),
            status: $('#newStatus').val(),
            pay: $('#newPay').val() 
        })
    }











     
>>>>>>> fbe6c8041283b0e35dd2a5fc04a7656c22e2a81c
});

