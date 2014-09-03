'use strict';

/**
 *
 * @ngInject
 */

function LocationsListingCtrl($state, $scope, STATE) {
    var self = this;

    self.locations = $scope.locations;

    self.viewLocationDetails = function(locId) {
        $state.go(STATE.LOCATION_DETAILS, { 'locId': locId });
    };

}

module.exports = angular
    .module('angularBPSeed.components.locationsListing.locationsListingCtrl', [
    ])
    .controller('LocationsListingCtrl', LocationsListingCtrl);
