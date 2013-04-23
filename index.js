
/**
 * Module dependencies.
 */

var path = require('path');
var langs = require('./data');
var basename = path.basename;

/**
 * Expose `isCode()`.
 */

module.exports = isCode;

/**
 * Check if `path` is a code filename.
 *
 * @param {String} path
 * @return {Boolean|Object}
 * @api public
 */

function isCode(path) {
  var base = basename(path);

  for (var i = 0; i < langs.length; i++) {
    var lang = langs[i];
    for (var j = 0; j < lang.regexps.length; j++) {
      var re = lang.regexps[j];
      if (re.test(base)) {
        return lang;
      }
    }
  }

  return false;
}
