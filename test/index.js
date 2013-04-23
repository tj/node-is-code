
/**
 * Module dependencies.
 */

var isCode = require('..');
var assert = require('better-assert');

describe('isCode(path)', function(){
  describe('when true', function(){
    it('should return information about the language', function(){

    })
  })

  describe('when false', function(){
    it('should return false :)', function(){
      assert(false == isCode('something'));
    })
  })
})
