# Where's My Donkey?

Search no more, your donkey is right here.

## Project

Who doesn't want to find the perfect donkey? Your despair comes to an end right now. This app lets you search for the beloved donkey, and anything else you want. Ah, also this app is intended to use some cool web technologies that are available out there.

## Installation

Clone repository

```
git clone https://github.com/marcelscruz/wheres-my-donkey
```

Go inside root folder

```
cd wheres-my-donkey
```

Install dependencies

```
yarn install
```

Add Flickr API key

In /server/config create file called `keys_dev.js` with following code

```
module.exports = {
  flickrKey: [your_api_key],
}
```

### Running in development

```
yarn dev
```

Go to `localhost:3000`

### Running tests

```
yarn test
```

## Built with

- React
- Redux
- Node.js
- Sass
- Mocha
- Enzyme
- Chai
- Flickr API

## Author

- **Marcel Cruz**
