'use strict';

/**
 *
 * @ngInject
 */

function AppMessagesService() {
    var self = this,
        messages = [];

    self.addMessage = function (message) {
        messages.push({
                type: message.type,
                text: message.text
            }
        );
    };

    self.getMessages = function() {
        return messages;
    };

    self.removeMessage = function(messageIndex) {
        messages.splice(messageIndex, 1);
    };
}

module.exports = angular
    .module('angularBPSeed.components.appMessages.appMessagesService', [
    ])
    .service('appMessagesService', AppMessagesService);