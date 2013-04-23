
/**
 * Module dependencies.
 */

var isCode = require('..');
var assert = require('better-assert');

describe('isCode(path)', function(){
  describe('when true', function(){
    it('should return information about the language', function(){
      var lang = isCode('foo.yaml');
      lang.names.should.eql(['yaml']);

      var lang = isCode('foo.yml');
      lang.names.should.eql(['yaml']);

      var lang = isCode('some/path/to/Makefile');
      lang.names.should.eql(['make', 'makefile', 'mf', 'bsdmake']);
    })
  })

  describe('when false', function(){
    it('should return false :)', function(){
      assert(false == isCode('something'));
    })
  })
})
