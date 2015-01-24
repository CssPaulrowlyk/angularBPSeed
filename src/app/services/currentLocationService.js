'use strict';

/**
 * This service stores the location that the user is currently viewing.
 * It also is a way around storing data in the $rootScope, which you almost never want to do.
 *
 * @constructor
 * @ngInject
 */
function CurrentLocationService() {
    let currentLoc = {},
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

