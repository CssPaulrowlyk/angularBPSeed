'use strict';

/**
 *
 * @ngInject
 */

function AppMessagesCtrl($rootScope, CONSTANTS) {
    var self = this;

    self.alerts = [];

    $rootScope.$on(CONSTANTS.APP_MESSAGE, function(event, message) {
        self.alerts.push({
                type: message.type,
                msg: message.message
            }
        );
    });

    /**
     * closes the alert and removes it from the list of alerts.
     * @param alertIndex
     */
    self.closeAlert = function (alertIndex) {
        self.alerts.splice(alertIndex, 1);
    };
}

module.exports = angular
    .module('angularBPSeed.components.appMessages.appMessagesCtrl', [
    ])
    .controller('AppMessagesCtrl', AppMessagesCtrl);