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
            .state ('request',{
                url: '/request',
                templateUrl: '/templates/request.html',
                controller: 'MyApp.HttpRequestController'
            })
        ;
    }
]);


//Create a home page controller
app.controller ('MyApp.HomeController',[
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

app.controller ('MyApp.HttpRequestController',[
    '$scope', '$http',

    function ($scope, $http) {
        console.log ('RequestController')

        $scope.post = {};
        $scope.postList = [];

        $scope.create = function () {
            console.log ('Trying to create a post:', $scope.post)

            $http ({
                url: 'http://localhost:3000/posts',
                //Use the "POST" method because we want to
                //post/ create data on the server.
                method: 'POST',
                data: $scope.post,

            })
            .success (function (response) {
                console.log ('This is the error:', response);
            })
            .error (function (response){
                console.error ('This is the error: ', response);
            })
        }
        $scope.readAll = function () {
            console.log ('Reading all the post');

            //Make a call to grab at the post objects
            $http ({
                url: 'http://localhost:3000/posts',
                //Use the "POST" method because we want to
                //post/ create data on the server.
                method: 'GET',
                data: $scope.post
            })
            .success (function (response) {
                console.log ('This is the response:', response);
                $scope.postList = response;
            })
            .error (function (response){
                console.log ('This is the error: ', response);
            })
        }
        $scope.update = function (){
            console.log ("Updating Posts");
            $http ({
                url: 'http://localhost:3000/posts/' + $scope.post.id,
                //Use the "POST" method because we want to
                //post/ create data on the server.
                method: 'PUT',
                data: $scope.post,

            })
            .success (function (response) {
                console.log ('This is the error:', response);
            })
            .error (function (response){
                console.error ('This is the error: ', response);
            })
        }
        $scope.delete = function (){
            console.log ("Updating Posts");
            $http ({
                url: 'http://localhost:3000/posts/' + $scope.post.id,
                //Use the "POST" method because we want to
                //post/ create data on the server.
                method: 'DELETE',
                data: $scope.post,

            })
            .success (function (response) {
                console.log ('This is the error:', response);
            })
            .error (function (response){
                console.error ('This is the error: ', response);
            })
        }
    }
]);
