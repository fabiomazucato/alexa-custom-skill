const Alexa = require('ask-sdk-core');
const i18n = require('i18next');

/* Conversas & Mensagens */
const speechMap = require('../../helper/speechMap');

const LocalisationRequestInterceptor = {
    process(handlerInput) {
        i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: speechMap
        }).then((t) => {
            handlerInput.t = (...args) => t(...args);
        });
    }
};

module.exports = LocalisationRequestInterceptor;