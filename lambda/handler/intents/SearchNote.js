const Alexa = require('ask-sdk-core');

const SearchNoteIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SearchNoteIntent';
        
    },
    async handle(handlerInput) {
        try {
            const note = Alexa.getSlotValue(handlerInput.requestEnvelope, 'nf');
            
            const speakOutput = handlerInput.t('NF_SEARCH_RESULT', { status: 'cancelado', username: 'Anderson'});
            const speakRepromp = handlerInput.t('NF_SEARCH_INSTRUCTION');
            
            return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakRepromp)
            .getResponse();
            
            
        } catch (err) {
            console.error('Ocorreu este erro: ', err);
        }
    }
}

module.exports = SearchNoteIntentHandler;