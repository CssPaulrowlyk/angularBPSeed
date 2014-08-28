'use strict';

/**
 *
 * @ngInject
 */

function AppMessagesService($rootScope, CONSTANTS) {
    var self = this;

    self.sendMessage = function (message) {
        $rootScope.$broadcast(CONSTANTS.APP_MESSAGE, {
            type: message.type,
            text: message.text
        });
    };
}

module.exports = angular
    .module('angularBPSeed.components.appMessages.appMessagesService', [
    ])
    .service('appMessagesService', AppMessagesService);