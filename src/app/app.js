'use strict';

/*
 * Note that libraries retrieved via Bower are not CommonJS compatible, so they are defined in the traditional
 * Angular way. Libraries retrieved via npm (or modules defined within the app) can be defined via 'require'
 */
angular.module('angularBPSeed', [
    'ui.router',
    'ui.bootstrap',
    'templates-app',
    'angular-loading-bar',
    require('./pages/main/mainCtrl').name,
    require('./pages/locationDetails/locationDetailsCtrl').name,
    require('./services/locationLookupService').name,
    require('./components/appMessages/appMessages').name
]).config(['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider',
    function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
        // set loading bar preferences
        cfpLoadingBarProvider.includeSpinner = true;
        // only show the loading bar if the resolve takes more than 1 second. this prevents the user
        // from seeing the loading bar flash on the screen when the resolve completes quickly.
        cfpLoadingBarProvider.latencyThreshold = 1000;

        $urlRouterProvider.otherwise('/main');
        $stateProvider.state('main', {
            url: '/main',
            resolve: {
                locations: function (locationLookupService) {
                    return  locationLookupService.getLocations();
                }
            },
            views: {
                "page": {
                    controller: 'MainCtrl as mainCtrl',
                    templateUrl: 'pages/main/main.tpl.html'
                }
            }
        }).state('locationDetails', {
            url: '/locationDetails/{locId}',
            resolve: {
                location: function($stateParams, locationLookupService) {
                    return locationLookupService.getLocationById($stateParams.locId);
                }
            },
            views: {
                "page": {
                    controller: 'LocationDetailsCtrl as locationDetailsCtrl',
                    templateUrl: 'pages/locationDetails/locationDetails.tpl.html'
                }
            }
        });
    }])
    .constant( 'CONSTANTS', {
        // Use constants instead of using "magic strings". In other words, define a key here, so you don't have to
        // duplicate string the same string value(s) all over your app. For example, to use this, inject it into your
        // module, then refer to it as CONSTANTS.MY_KEY. This is better than repeating the string "myValue"
        // in multiple files. Using a constant, if you want to change the key value, you just change it here in one place
        // whereas if you use a string like "myValue" and you change its value, you have to search your app for
        // every instance of that string.
        'MY_KEY': 'myValue'
    })
    .run(function ($rootScope, cfpLoadingBar) {
        $rootScope.$on("$stateChangeStart", function () {
            // show the loading bar when we start to change to a new page. This is mostly for states that
            // perform a resolve() to retrieve data before loading the next state.
            cfpLoadingBar.start();
        });
        $rootScope.$on("$stateChangeSuccess", function () {
            //hide the loading bar
            cfpLoadingBar.complete();
        });
        $rootScope.$on("$stateChangeError", function () {
            //hide the loading bar
            cfpLoadingBar.complete();
        });
    })
;

