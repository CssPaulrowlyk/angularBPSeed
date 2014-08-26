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
    require('./services/locationLookupService').name
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
        //TODO: add code to hide the bar is the stateChange fails due to an error in resolve()?
    })
;

