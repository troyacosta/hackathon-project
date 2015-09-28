'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var EmployeeCollection = require('./collections/employeeCollection.js');
var EmployeeModel = require('./models/employeeModel.js');
var _ = require('backbone/node_modules/underscore/underscore-min.js');
var EmployeeView = require('./views/employeeView');
var EditEmployeeView = require('./views/editEmployeeView');
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
            'editEmployeeInfo/:id': 'editEmployeeInfo',
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
            $logIn.hide();
            $homePage.show();            
        },
        employees: function() {
            $all.hide();
            $logIn.hide();
            $employees.show();
        },
        editEmployeeInfo: function(id) {
            console.log('editEmployeeInfo')
            $all.hide();
            $logIn.hide();
            $editEmployeeInfo.show();
            var eId = parseInt(id);
            var employee = employeeCollection.findWhere({
                id: eId
            });
            editEmployeeInfo(employee);
        },
        addNewEmployee: function() {
            $all.hide();
            $logIn.hide();
            $addNewEmployee.show();
        },
        showIndividual: function(id) {
            $all.hide();
            $logIn.hide();
            $singleEmployee.show();

            var eId = parseInt(id);
            var employee = employeeCollection.findWhere({
                id: eId
            });
            singleEmployeeInfo(employee);
        }
    });

    var router = new Router;
    Backbone.history.start();

    function printEmployees(model) {
        $('.names').append('<section class=col-sm-4 col-lg-3 staff><a id=a' + model.get('id') +
         ' href="#employee/' + model.get('id') + '">' + model.get('name') + '</a><br>' + model.get('position') + '</section>');
    }

    function addNewEmployee() {
        employeeCollection.add({
            name: $('#newName').val(),
            dept: $('#newDept').val(),
            position: $('#newPosition').val(),
            status: $('#newStatus').val(),
            pay: $('#newPay').val()
        });
    }

    employeeCollection.on('add', printEmployees);
    employeeCollection.fetch();
    $('#newEmployeeForm').submit(function(e) {
        e.preventDefault();
        addNewEmployee();
        $('#newName').val('');
        $('#newDept').val('');
        $('#newPosition').val('');
        $('#newStatus').val('');
        $('#newPay').val('');
    });
    
    function singleEmployeeInfo(model) {
        var employeeView = new EmployeeView({
            model: model
        });
        $('#singleEmployee').html('');
        $('#singleEmployee').append(employeeView.$el);
    }

    //function that will populate the edit employee input fields 
    function editEmployeeInfo(model) {
        var editEmployeeView = new EditEmployeeView({
            model: model
        });
        $('#editEmployeeInfo').html('');
        $('#editEmployeeInfo').append(editEmployeeView.$el);
    }
});
