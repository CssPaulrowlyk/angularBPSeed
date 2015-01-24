'use strict';

/**
 *
 * @ngInject
 */

function CurrentWeatherCtrl($scope, $location, PAGE) {
    let self = this;

    self.wx = $scope.wx.current_observation;

    self.goToForecastPage = function() {
        $location.path(PAGE.FORECAST);
    };
}

module.exports = angular
    .module('angularBPSeed.components.currentWx.currentWxCtrl', [
    ])
    .controller('CurrentWeatherCtrl', CurrentWeatherCtrl);
