'use strict';

/**
 *
 * @constructor
 * @ngInject
 */
function LocationDetailsCtrl($modal, $state, $scope) {
    var self = this;

    self.alerts = [];
    self.location = $scope.location;

    self.viewLocations = function() {
        $state.go('main');
    };

    /**
     * Display a dialog. This is just an example of how to add a modal to the directive. Notice that the code for
     * the modal is in a subdirectory of this directive...since this modal is meant to only be used by this directive.
     */
    self.showModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'components/locationDetails/confirmationModal/confirmationModal.tpl.html',
            controller: 'ConfirmationModalCtrl as confirmationModalCtrl'
        });

        modalInstance.result.then(function () {
            self.alerts.push({
                    type: 'success',
                    msg: 'You clicked ok in the modal'
                }
            );

        }, function () {
            self.alerts.push({
                    type: 'warning',
                    msg: 'You clicked cancel in the modal'
                }
            );
        });
    };

    self.closeAlert = function (alertIndex) {
        self.alerts.splice(alertIndex, 1);
    };

}

module.exports = angular
    .module('angularBPSeed.components.locationDetails.locationDetailsCtrl', [
        require('./confirmationModal/confirmationModalCtrl').name
    ])
    .controller('LocDetailsCtrl', LocationDetailsCtrl);
