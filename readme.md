# replace-classes [![Build Status](https://secure.travis-ci.org/johnotander/replace-classes.png?branch=master)](https://travis-ci.org/johnotander/replace-classes) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Replace classes in HTML

## Installation

```bash
npm install --save replace-classes
```

## Usage

```javascript
var replaceClasses = require('replace-classes')

replaceClasses('<a href="#!" class="btn btn-default">Hello!</a>', {
  btn: 'b br2',
  'btn-default': 'b--light-gray bg-white'
})

// => '<a href="#!" class="b br2 b--light-gray bg-white">Hello!</a>'
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
