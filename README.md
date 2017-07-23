# Multi Language Alerts

> Reusable general-purpose alert messages in different languages.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributors](#contributors)

## Installation

```sh
# Using npm:
$ npm install --save multi-language-alerts

# Or yarn:
$ yarn add multi-language-alerts
```

## Usage

There are three ways of using this data:

- Use the npm module to retrieve and access the data ([instructions below](#api))
- Use this repo as a submodule and write your own thing to load the data (just a bunch of json files!)
- Link directly to the files on GitHub

## API

First of all, if you want your messages in another language than English(`en`), you'll need an `API key` from [azure](portal.azure.com).

> See [Microsoft Translator API Documentation](http://www.aka.ms/TranslatorDevDocumentation).

Once you have the key, set up an environment variable called `MICROSOFT_TRANSLATOR_API_KEY` with its value:

```sh
export MICROSOFT_TRANSLATOR_API_KEY = < your API Key >
```

Now let's say you want a simple message which tells you the username you're looking for is alredy in use:

```js
const alertFor = require('multi-language-alerts);

alertFor('in_use/username', 'en')
	.then(alert => console.log(alert));
// => "Username is already in use."
```

Or using *ES6 Modules* + *ES8 `async/await*`*:

```js
import alertFor from 'multi-language-alerts';

const myAlertString = await alertFor('db/connection/error', 'pt');

console.log(myAlertString);
// => "Falha ao conectar-se ao banco de dados."
```

### `alertFor(messageDescriptor, language)`

#### Description

Returns a promise which will handle the alert message for the given message descriptor in the given language.

#### Type Signature

```typescript
(messageDescriptor: String, language: String) => Promise<String>
```

##### Parameters

###### `messageDescriptor`

A simple path based on the [original `.json` file](./src/data) which is a representation of its hierarchy.

Let's say that you want a message which says that the user's given birthdate is invalid. Let's try to find it in our source json:

```json
{
	...
	"invalid": {
		"user": {
			...
			"date_of_birth": "Invalid birthdate.",
			...
		},
		...
	},
	...
}
```

So the object hierarchy for `date_of_birth` is:

```sh
|-- invalid
|   |-- user
|       |-- date_of_birth
```

And its **`messageDescriptor`** ends up being `invalid/user/date_of_birth`.

###### `language`

A simple string representing the which languange you want your alert message to be written in–e.g. `en`, `pt`, `uk`, `ko` etc.

> Please refer to [this link](https://msdn.microsoft.com/en-us/library/hh456380.aspx) for the complete list of the languages supported by *Microsoft Translator Text API*.

## Contributors

| Name:                | Language: | GitHub:             |
|----------------------|-----------|---------------------|
| Allex Rodrigues      | en        | @FusRoDah061        |
| Bruno Gonçalves      | en        | @brunogbr           |
| Felipe Barelli       | pt, en    | @felipecbarelli     |
| Luiz Noyola          | es        |                     |
| Pablo Rocha          | es        |                     |
