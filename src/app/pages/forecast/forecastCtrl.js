'use strict';

/*
 * @ngInject
 */
function ForecastCtrl(forecast) {
    var self = this;

    // forecast is injected into this function from router resolve. See app.js for route "currentWx"
    self.forecast = forecast.forecast;
}

module.exports = angular
    .module('angularBPSeed.pages.forecast', [
        require('./../../components/forecast/fcst').name
    ])
    .controller('ForecastCtrl', ForecastCtrl);
