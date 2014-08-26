'use strict';

/**
 *
 * @constructor
 * @ngInject
 */
function LocationsListing() {
    //var self = this;
    return {
        restrict: 'EA',
        controllerAs: 'locationsListingCtrl',
        controller: 'LocationsListingCtrl',
        templateUrl: 'components/locationsListing/locationsListing.tpl.html',
        scope: {
            'locations': '='
        }
    };
}

module.exports = angular
    .module('angularBPSeed.components.locationsListing', [
        require('./locationsListingCtrl').name
    ])
    .directive('locationsListing', LocationsListing);
