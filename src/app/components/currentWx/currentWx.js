'use strict';

/**
 *
 * @constructor
 * @ngInject
 */
function CurrentWx() {
    //var self = this;
    return {
        restrict: 'EA',
        controllerAs: 'currentWeatherCtrl',
        controller: 'CurrentWeatherCtrl',
        templateUrl: 'components/currentWx/currentWx.tpl.html',
        scope: {
            'wx': '='
        }
    };
}

module.exports = angular
    .module('angularBPSeed.components.currentWx', [
        require('./currentWxCtrl').name
    ])
    .directive('currentWx', CurrentWx);
