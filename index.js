'use strict'

var cheerio = require('cheerio')
var isBlank = require('is-blank')

module.exports = function replaceClasses (html, classes) {
  if (typeof html !== 'string' || typeof classes !== 'object') {
    throw new TypeError('replace-classes expected an html string and a class object')
  }

  if (isBlank(classes)) {
    return html
  }

  var html = cheerio.load(html)

  html('*').each(function (_, element) {
    var _this = html(this)

    Object.keys(classes).forEach(function (klass) {
      if (_this.hasClass(klass)) {
        _this.removeClass(klass)
        _this.addClass(classes[klass])
      }
    })
  })

  return html.html()
}
