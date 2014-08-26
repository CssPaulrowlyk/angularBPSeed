'use strict';

/**
 *
 * @ngInject
 */

function LocationsListingCtrl($state, $scope) {
    var self = this;

    self.locations = $scope.locations;

    self.viewLocationDetails = function(locId) {
        $state.go('locationDetails', { 'locId': locId });
    };

}

module.exports = angular
    .module('angularBPSeed.components.locationsListing.locationsListingCtrl', [
    ])
    .controller('LocationsListingCtrl', LocationsListingCtrl);
