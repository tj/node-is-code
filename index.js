
/**
 * Module dependencies.
 */

var path = require('path');
var basename = path.basename;

module.exports = isCode;

function isCode(path) {
  var base = basename(path);
  return false;
}
