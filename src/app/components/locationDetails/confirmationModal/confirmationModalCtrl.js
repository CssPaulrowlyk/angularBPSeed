'use strict';

/**
 *
 * @constructor
 * @ngInject
 */
function ConfirmationModalCtrl($modalInstance) {
    var self = this;

    self.message = 'Hey...this is the modal!';

    self.ok = function () {
        //note: you can add a param to close() if you want to pass something back
        $modalInstance.close();
    };

    self.cancel = function () {
        $modalInstance.dismiss();
    };
}

module.exports = angular
    .module('angularBPSeed.components.locationDetails.confirmationModal.confirmationModalCtrl', [
    ])
    .controller('ConfirmationModalCtrl', ConfirmationModalCtrl);
