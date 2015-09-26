'use strict';
var $ = require('jquery');
var Backbone = require('backbone');
var EmployeeCollection = require('./collections/employeeCollection');
var _ = require('backbone/node_modules/underscore');

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
    employeeCollection.fetch();
    console.log(employeeCollection);
   
// function attachMenuDonorList(model) {
//         $('.menuDonorList').append('<li><a id="a' + model.get('id') + '" href="#donor/' + model.get('id')+'">' + model.attributes.name + '</a></li>');
//         $('#selectedDonor').append('<ul  class="donorsNames" id="b' + model.get('id') +'"><li>' + model.get('name') + '</li>' +
//                                     '<li>' + model.get('email') + '</li>' +
//                                     '<li>' + model.get('spousename') + '</li>' +
//                                     '<li>' + model.get('phone') + '</li></ul>'
//                                 )


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
