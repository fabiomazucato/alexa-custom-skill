// const persistenceAdapter = require('ask-sdk-s3-persistence-adapter');
// const i18n = require('i18next');
// const moment = require('moment-timezone');

const ErrorHandler = require('./ErrorHandler');

/* Intents */
const HelpIntent = require('./intents/Help');
const NoIntent = require('./intents/No');
const CancelAndStopIntent = require('./intents/CancelAndStop');
const SearchNoteIntent = require('./intents/SearchNote');

/* Requests */
const LaunchRequest = require('./requests/Launch');
const LocalisationInterceptorRequest = require('./requests/LocalisationInterceptor');
const SessionEndedRequest = require('./requests/SessionEnded');

module.exports = {
	getHandlers: () => [
		SearchNoteIntent,
		LaunchRequest,
		HelpIntent,
		CancelAndStopIntent,
		SessionEndedRequest,
		NoIntent
	],
	getRequestInterceptors: () => [
		LocalisationInterceptorRequest
		// LoggingRequestInterceptor
	],
	errorHandler: ErrorHandler
}
