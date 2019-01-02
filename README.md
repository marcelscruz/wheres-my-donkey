# Where's My Donkey?

Search no more.

## Project

Who doesn't want to search for pictures of donkeys?

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
  flickrKey: [your_api_key]
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
