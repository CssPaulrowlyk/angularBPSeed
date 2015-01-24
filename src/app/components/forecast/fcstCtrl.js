'use strict';

/**
 *
 * @ngInject
 */

function FcstCtrl($scope, $location, PAGE, currentLocationService) {
    let self = this;
    let loc = currentLocationService.getCurrentLocation();

    self.fcst = $scope.fcst;

    self.getLocationName = function() {
        return loc.city + ', ' + loc.state;
    };

    self.goToHomePage = function() {
        $location.path(PAGE.MAIN);
    };
}

module.exports = angular
    .module('angularBPSeed.components.forecast.fcstCtrl', [
        require('./../../services/currentLocationService').name
    ])
    .controller('FcstCtrl', FcstCtrl);
