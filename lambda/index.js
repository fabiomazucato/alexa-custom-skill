const Alexa = require('ask-sdk-core')
const handlers = require('./handler')

const skillBuilder = Alexa.SkillBuilders.custom()

/* LAMBDA SETUP */
exports.handler = skillBuilder
	.addRequestHandlers(...handlers.getHandlers())
	.addRequestInterceptors(...handlers.getRequestInterceptors())
	// .addResponseInterceptors({
	// 'process': (handlerInput, response) => console.log(response),
	// })
	.addErrorHandlers(handlers.errorHandler)
	.withApiClient(new Alexa.DefaultApiClient())
	.lambda()
