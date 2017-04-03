# extglob-invert

[![Greenkeeper badge](https://badges.greenkeeper.io/Leelow/extglob-invert.svg)](https://greenkeeper.io/)

[![NPM downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Build Status][appveyor-image]][appveyor-url]
[![Codacy Coverage][codacy-coverage-image]][codacy-coverage-url]
[![Codacy Grade][codacy-grade-image]][codacy-grade-url]
[![Dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url]

An easy way to hook process.exit().

## Install

```
$ npm install --save extglob-invert
```

## Usage

```js
const invert = require('extglob-invert');

invert('/path/to/file')             // !(path/to/file)
invert('   !  !( !/path/to/file)')  // /path/to/file
invert('!**')                       // **
invert('!(!!(**))')                 // **

```

## Test and coverage
You just have to clone the repo and run

```
$ npm test
$ npm run coverage
```

## License

[MIT](LICENSE) © [Léo Lozach](https://github.com/Leelow)

[downloads-image]: https://img.shields.io/npm/dt/extglob-invert.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/extglob-invert
[travis-image]: https://travis-ci.org/Leelow/extglob-invert.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/extglob-invert
[appveyor-image]: https://ci.appveyor.com/api/projects/status/32aj3ap0kelnbdqt?svg=true
[appveyor-url]: https://ci.appveyor.com/project/Leelow/extglob-invert
[codacy-coverage-image]: https://api.codacy.com/project/badge/Coverage/be1d56eb162d41a586ecac79685161f7
[codacy-coverage-url]: https://www.codacy.com/app/Leelow/extglob-invert?utm_source=github.com&utm_medium=referral&utm_content=Leelow/extglob-invert&utm_campaign=Badge_Coverage
[codacy-grade-image]: https://api.codacy.com/project/badge/Grade/be1d56eb162d41a586ecac79685161f7
[codacy-grade-url]: https://www.codacy.com/app/Leelow/extglob-invert?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/extglob-invert&amp;utm_campaign=Badge_Grade
[dev-dependencies-image]: https://david-dm.org/leelow/extglob-invert/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/leelow/extglob-invert?type=dev
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/
