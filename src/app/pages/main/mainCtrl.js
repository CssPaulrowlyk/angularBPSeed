'use strict';

/*
 * @ngInject
 */
function MainCtrl(locations) {
    var self = this;

    // locations is injected into this function from UI Router resolve. See app.js for state "main"
    self.locations = locations;
}

module.exports = angular
    .module('angularBPSeed.pages.main', [
        require('./../../components/locationsListing/locationsListing').name
    ])
    .controller('MainCtrl', MainCtrl);
