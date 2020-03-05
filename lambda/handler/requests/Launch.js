const Alexa = require('ask-sdk-core')
const { getNf } = require('../../services/NF')

const LaunchRequestHandler = {
	canHandle(handlerInput) {
		const sessionAttributes =
			handlerInput.attributesManager.getSessionAttributes() || {}

		return (
			Alexa.getRequestType(handlerInput.requestEnvelope) ===
			'LaunchRequest'
		)
	},
	async handle(handlerInput) {
		const {
			serviceClientFactory,
			requestEnvelope,
			attributesManager
		} = handlerInput

		const deviceId = Alexa.getDeviceId(requestEnvelope)
		const sessionAttributes = attributesManager.getSessionAttributes() || {}

		const responseNf = await getNf()

		// let userTimeZone;
		// try {
		//     const upsServiceClient = serviceClientFactory.getUpsServiceClient();
		//     userTimeZone = await upsServiceClient.getSystemTimeZone(deviceId);
		// } catch (error) {
		//     if (error.name !== 'ServiceError') {
		//         const errorSpeechText = handlerInput.t('ERROR_TIMEZONE_MSG');
		//         return handlerInput.responseBuilder.speak(errorSpeechText).getResponse();
		//     }
		//     console.log('error', error.message);
		// }
		// console.log('userTimeZone', userTimeZone);

		const speakOutput = handlerInput.t('NF_SEARCH_RESULT', {
			note: responseNf.nf,
			status: responseNf.status,
			username: responseNf.user
		})
		// const speakRepromp = handlerInput.t('NF_SEARCH_INSTRUCTION');
		return (
			handlerInput.responseBuilder
				.speak(speakOutput)
				// .reprompt(speakRepromp)
				.getResponse()
		)
	}
}

module.exports = LaunchRequestHandler
