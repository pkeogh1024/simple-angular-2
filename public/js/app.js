'use strict'

var app =angular.module ('MyApp', ['ui.router']);

//Configure the 'MyApp' angular application.
app.config([
    //Bring in the dependency objects by name.
    '$stateProvider',

    //Provide a callback function to use one all
    //the dependencies have been loaded.
    function ($stateProvider) {
        //Setup and define out page states.
        $stateProvider
            .state ('home',{
                url: '/',
                // template:'<h2>Home Page</h2>'
                templateUrl: '/templates/home.html',
                controller: 'MyApp.HomeController'
        })
            .state ('about', {
                url: '/about',
                // template: '<h2>About Page</h2>'
                templateUrl: '/templates/about.html'
        })
            .state ('contact',{
                url: '/contact',
                // template: '<h2>Contact Page</h2>'
                templateUrl: '/templates/contact.html'
        })
        ;
    }
])

//Create a home page controller
app.controller('MyApp.HomeController', [
    //List the dependencies for this controller
    '$scope',

    //Provide a call back to run once all the
    //dependencies have been created.
    function ($scope) {
        console.log('The home controller has loaded.');

        //The scope object acts as a pubic area that is available to
        //mark up pageand other objects or services
        $scope.name = 'Bob';
        $scope.age = 32;

        $scope.nameList = ['susan', 'jane', 'larry', 'joe', 'frank'];

        $scope.increaseAge = function() {
            console.log ('Increasing the age.');
            $scope.age = $scope.age+1;
        }
        $scope.addListItem = function() {
            console.log ('Add List Item');
            $scope.nameList.push ('Bob');
        }


    }
]);
