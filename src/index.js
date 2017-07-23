const Translator = require('mstranslator');
const {
	equals,
	isNil,
	path,
	split
} = require('ramda');
const data = require('./data');

const apiKey = process.env.MICROSOFT_TRANSLATOR_API_KEY;
const translatorClient = new Translator({
	api_key: apiKey
}, true);
const pathComponents = split('/');

const alertFor = (message, language) => {
	const messagePath = pathComponents(message);
	const stringAtPath = path(messagePath, data);
	const options = {
		text: stringAtPath,
		from: 'en',
		to: language
	};

	return new Promise((resolve, reject) => {
		if (isNil(stringAtPath)) {
			const err = new Error('Please use a valid alert expression.');
			reject(err);
		}

		(equals(language, 'en')) ?
			resolve(stringAtPath) :
			translatorClient.translate(options, (err, res) => {
				if (err) {
					reject(err);
				}
				resolve(res);
			});
	});
};

module.exports = alertFor;
