'use strict';

/**
 *
 * @constructor
 * @ngInject
 */
function LocationDetails() {
    //var self = this;
    return {
        restrict: 'EA',
        controllerAs: 'locationDetailsCtrl',
        controller: 'LocDetailsCtrl',
        templateUrl: 'components/locationDetails/locationDetails.tpl.html',
        scope: {
            'location': '='
        }
    };
}

module.exports = angular
    .module('angularBPSeed.components.LocationDetails', [
        require('./locationDetailsCtrl').name
    ])
    .directive('locationDetails', LocationDetails);
