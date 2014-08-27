'use strict';

/**
 * This service simulates a web service (AJAX) call by using a promise to delay the response. In a real app, you
 * would likely make a call to a real backend service.
 * @constructor
 * @ngInject
 */
function LocationLookupService($q, $timeout, $rootScope, CONSTANTS) {
    var self = this,
        locations = [
            {
                id: '1',
                city: 'Nashville',
                state: 'TN',
                extraField: 'this is an extra field for the details page',
                anotherField: "this is another field for the details page"
            },
            {
                id: '2',
                city: 'Chicago',
                state: 'IL',
                extraField: 'this is an extra field for the details page',
                anotherField: "this is another field for the details page"
            },
            {
                id: '3',
                city: 'Asheville',
                state: 'NC',
                extraField: 'this is an extra field for the details page',
                anotherField: "this is another field for the details page"
            },
            {
                id: '4',
                city: 'Error',
                state: 'ZZ',
                extraField: 'this is an extra field for the details page',
                anotherField: "this is another field for the details page"
            }
        ];

    /**
     * Simulate a call to a backend service for a list of locations
     * @returns {*}
     */
    self.getLocations = function () {
        var deferred = $q.defer();

        $timeout(function() {
            deferred.resolve(locations);
        }, 2000); // make this longer than 1000 so the loading bar will display

        return deferred.promise;
    };

    /**
     * Returns the location object matching the specified id
     * @param locId
     * @returns {*}
     */
    self.getLocationById = function (locId) {
        var deferred = $q.defer(),
            errorMsg,
            loc;
        // simulate an error so we can reject the promise and show an error message within the app, using the
        // appMessages directive
        if(locId === '4') {
            errorMsg = {
                type: 'warning',
                message: "Error looking up location!"
            };
            $rootScope.$emit(CONSTANTS.APP_MESSAGE, errorMsg);
            deferred.reject(null);

        } else {
            // you could use angular.forEach instead of lodash...
            _.forEach(locations, function(location) {
                if(location.id === locId) {
                    loc = location;
                    // we should short circuit the loop here, but not going to bother for this demo.
                }
            });

            $timeout(function() {
                deferred.resolve(loc);
            }, 2000); // make this longer than 1000 so the loading bar will display
        }

        return deferred.promise;
    };

}
module.exports = angular
    .module('angularBPSeed.services.locationLookupService', [])
    .service('locationLookupService', LocationLookupService);

