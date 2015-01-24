'use strict';

/*
 * @ngInject
 */
function MainCtrl(wxUndergroundService, currentLocationService, $location, PAGE) {
    // use let instead of var to prove that 6top5ify worked...
    let self = this;

    // the model for the form
    self.form = {
        zipCode: ''
    };

    self.submitZipCode = function() {
        wxUndergroundService.getLocationForZip(self.form.zipCode).then(function (locData) {
            if(locData.location) {
                currentLocationService.setCurrentLocation(locData.location);
                $location.path(PAGE.CURRENT_WEATHER);
            } else {
                // error during lookup. Message will be shown by message service.
                // do not go to next page
            }
        });
    };
}

module.exports = angular
    .module('angularBPSeed.pages.main', [
        require('./../../services/wxUndergroundService').name,
        require('./../../services/currentLocationService').name
    ])
    .controller('MainCtrl', MainCtrl);
