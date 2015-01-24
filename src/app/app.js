'use strict';

/*
 * Note that libraries retrieved via Bower are not CommonJS compatible, so they are defined in the traditional
 * Angular way. Libraries retrieved via npm (or modules defined within the app) can be defined via 'require'
 */
angular.module('angularBPSeed', [
    'ngRoute',
    'ui.bootstrap',
    'templates-app',
    'angular-loading-bar',
    require('./pages/main/mainCtrl').name,
    require('./pages/currentWx/currentWxCtrl').name,
    require('./pages/forecast/forecastCtrl').name,
    require('./services/wxUndergroundService').name,
    require('./services/currentLocationService').name,
    require('./components/appMessages/appMessages').name
]).constant('PAGE', {
    // Use constants instead of using "magic strings". In other words, define a key here, so you don't have to
    // duplicate the same string value(s) all over your app. For example, to use this, inject it into your
    // module, then refer to it as PAGE.MAIN. This is better than repeating the string "main"
    // in multiple files. Using a constant, if you want to change the key value, you just change it here in one place
    // whereas if you use a string like "main" and you change its value, you have to search your app for
    // every instance of that string.
    'MAIN': '/main',
    'CURRENT_WEATHER': '/currentWx',
    'FORECAST': '/forecast'
}).constant('CONST', {
    'WX_UNDERGROUND_KEY': '344d3f3c1ee346f7'
}).config(['$routeProvider', 'cfpLoadingBarProvider', 'PAGE',
    function ($routeProvider, cfpLoadingBarProvider, PAGE) {
        // set loading bar preferences
        cfpLoadingBarProvider.includeSpinner = true;
        // only show the loading bar if the resolve takes more than 1 second. this prevents the user
        // from seeing the loading bar flash on the screen when the resolve completes quickly.
        cfpLoadingBarProvider.latencyThreshold = 1000;

        $routeProvider
            .when('/', {
                redirectTo: PAGE.MAIN
            })
            .when(PAGE.MAIN, {
                controller: 'MainCtrl as mainCtrl',
                templateUrl: 'pages/main/main.tpl.html'
            })
            .when(PAGE.CURRENT_WEATHER, {
                controller: 'CurrentWxCtrl as currentWxCtrl',
                templateUrl: 'pages/currentWx/currentWx.tpl.html',
                resolve: {
                    currentWx: function (currentLocationService, wxUndergroundService) {
                        return wxUndergroundService.getCurrentWx(currentLocationService.getCurrentLocation());
                    }
                }
            })
            .when(PAGE.FORECAST, {
                controller: 'ForecastCtrl as forecastCtrl',
                templateUrl: 'pages/forecast/forecast.tpl.html',
                resolve: {
                    forecast: function (currentLocationService, wxUndergroundService) {
                        return wxUndergroundService.getForecast(currentLocationService.getCurrentLocation());
                    }
                }
            });

    }])
    .run(function ($rootScope, cfpLoadingBar) {
        $rootScope.$on("$routeChangeStart", function () {
            // show the loading bar when we start to change to a new page. This is mostly for states that
            // perform a resolve() to retrieve data before loading the next state.
            cfpLoadingBar.start();
        });
        $rootScope.$on("$routeChangeSuccess", function () {
            //hide the loading bar
            cfpLoadingBar.complete();
        });
        $rootScope.$on("$routeChangeError", function () {
            //hide the loading bar
            cfpLoadingBar.complete();
        });
    })
;

