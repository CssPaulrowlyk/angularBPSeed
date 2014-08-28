'use strict';

/**
 *
 * @ngInject
 */

function AppMessagesService() {
    var self = this;

    self.messages = [];

    self.addMessage = function (message) {
        self.messages.push({
                type: message.type,
                text: message.text
            }
        );
    };

    self.getMessages = function() {
        return self.messages;
    };

    self.removeMessage = function(messageIndex) {
        self.messages.splice(messageIndex, 1);
    };
}

module.exports = angular
    .module('angularBPSeed.components.appMessages.appMessagesService', [
    ])
    .service('appMessagesService', AppMessagesService);