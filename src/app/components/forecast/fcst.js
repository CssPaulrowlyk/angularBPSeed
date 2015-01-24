'use strict';

/**
 *
 * @constructor
 * @ngInject
 */
function Fcst() {
    //var self = this;
    return {
        restrict: 'EA',
        controllerAs: 'fcstCtrl',
        controller: 'FcstCtrl',
        templateUrl: 'components/forecast/fcst.tpl.html',
        scope: {
            'fcst': '='
        }
    };
}

module.exports = angular
    .module('angularBPSeed.components.forecast', [
        require('./fcstCtrl').name
    ])
    .directive('forecast', Fcst);
