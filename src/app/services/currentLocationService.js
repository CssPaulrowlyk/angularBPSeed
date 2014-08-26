'use strict';

/**
 * This service stores the location that the user is currently editing.
 * It also is a way around storing data in the $rootScope, which you almost never want to do.
 *
 * Note: this seed project doesn't use this file (yet). But I wanted to include it as an example of how you can
 * store state via a service (instead of using something like $rootScope)
 * @constructor
 * @ngInject
 */
function CurrentLocationService() {
    var currentLoc = {},
        self = this;

    self.setCurrentLocation = function (loc) {
        currentLoc = loc;
    };

    self.getCurrentLocation = function () {
        return currentLoc;
    };

}
module.exports = angular
    .module('angularBPSeed.services.currentLocationService', [])
    .service('currentLocationService', CurrentLocationService);

