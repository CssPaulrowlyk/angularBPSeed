'use strict';

/*
 * @ngInject
 */
function LocationDetailsCtrl(location) {
    var self = this;

    // location is injected into this function from UI Router resolve. See app.js for state "locationDetails"
    self.location = location;
}

module.exports = angular
    .module('angularBPSeed.pages.locationDetails', [
        require('./../../components/locationDetails/locationDetails').name
    ])
    .controller('LocationDetailsCtrl', LocationDetailsCtrl);
