'use strict';

/**
 * This service gets weather and location data from Weather Underground.
 *
 * @constructor
 * @ngInject
 */
function WxUndergroundService(CONST, $http, appMessagesService, $q) {
    let self = this;
    const BASE_URL = 'http://api.wunderground.com/api/' + CONST.WX_UNDERGROUND_KEY;

    function addErrorMessage(msg) {
        appMessagesService.addMessage({
            type: 'warning',
            text: msg
        });

    }

    self.getLocationForZip = function(zipCode) {
        // for fun, uncomment the line below, run grunt build,  and you'll get an error reported by 6to5 for trying to change a const value
        //BASE_URL = 'bob';
        let deferred = $q.defer();
        $http({
            method: 'get',
            url: BASE_URL + '/geolookup/q/' + zipCode + '.json'
        }).success(function(data) {
            if (data.response.error) {
                addErrorMessage(data.response.error.description + ' ' + zipCode);
                deferred.reject(data.response.error);
            } else {
                deferred.resolve(data);
            }
        }).error(function(error) {
            addErrorMessage("Error looking up location with zip code: " + zipCode);
            deferred.reject("There was an error getting the zip code location: " + error);
        });

        return deferred.promise;
    };

    self.getCurrentWx = function(location) {
        var deferred = $q.defer();
        $http({
            method: 'get',
            url: BASE_URL + '/conditions/q/' + location.state + '/' + location.city + '.json'
        }).success(function(data) {
            if (data.response.error) {
                addErrorMessage(data.response.error.description);
                deferred.reject(data.response.error);
            } else {
                deferred.resolve(data);
            }
        }).error(function(error) {
            addErrorMessage("Error looking up weather for location: " + location);
            deferred.reject("There was an error getting the current weather for location: " + error);
        });

        return deferred.promise;
    };

    self.getForecast = function(location) {
        var deferred = $q.defer();
        $http({
            method: 'get',
            url: BASE_URL + '/forecast/q/' + location.state + '/' + location.city + '.json'
        }).success(function(data) {
            if (data.response.error) {
                addErrorMessage(data.response.error.description);
                deferred.reject(data.response.error);
            } else {
                deferred.resolve(data);
            }
        }).error(function(error) {
            addErrorMessage("Error looking up forecast for location: " + location);
            deferred.reject("There was an error getting the forecast for location: " + error);
        });

        return deferred.promise;
    };
}
module.exports = angular
    .module('angularBPSeed.services.wxUndergroundService', [
        require('./../components/appMessages/appMessagesService').name
    ])
    .service('wxUndergroundService', WxUndergroundService);

