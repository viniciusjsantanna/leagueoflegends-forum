angular.module('LeagueofLegends')
	// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl :'view/home.html',
            controller: 'homeController',
        })

         // route for the about page
        .when('/home', {
            templateUrl :'view/home.html',
            controller: 'homeController'
        })

        // route for the about page
        .when('/post', {
            templateUrl : 'view/post.html',
            controller: 'postController'
        })

        // route for the contact page
        .when('/about', {
            templateUrl : 'view/about.html'
        }).
        when('/autenticar',{
            templateUrl: 'view/autenticar.html',
            controller: 'autenticarController'
        });

	$routeProvider.otherwise({redirectTo: "/"});
	$locationProvider.html5Mode(true);
});