'use strict';

/**
 *
 * @ngInject
 */

function AppMessagesCtrl(appMessagesService) {
    var self = this;

    self.alerts = appMessagesService.getMessages();

    /**
     * closes the alert and removes it from the list of alerts.
     * @param alertIndex
     */
    self.closeAlert = function (alertIndex) {
        appMessagesService.removeMessage(alertIndex);
    };
}

module.exports = angular
    .module('angularBPSeed.components.appMessages.appMessagesCtrl', [
        require('./appMessagesService').name
    ])
    .controller('AppMessagesCtrl', AppMessagesCtrl);