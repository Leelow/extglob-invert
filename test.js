/* eslint-env mocha */
const invert = require('./extglob-invert.js')
const assert = require('assert')

describe('extglob inversion', function () {
  it('should throw an error with a wrong argument', function () {
    assert.throws(function () {
      invert({})
    }, 'The argument must be a string or an array.')
  })

  it('should invert all item of the argument if it is an array', function () {
    assert.deepEqual(invert(['.', '!.']), ['!(.)', '.'])
  })

  it('should invert simple extglob', function () {
    assert.equal(invert('.'), '!(.)')
    assert.equal(invert('  . '), '!(.)')
    assert.equal(invert('a b'), '!(a b)')
    assert.equal(invert('  a b '), '!(a b)')
  })

  it('should invert extglob with unnecessary parenthesis', function () {
    assert.equal(invert('((.))'), '!(.)')
    assert.equal(invert('(  (  .) )'), '!(.)')
    assert.equal(invert('(a (b) )'), '!(a (b))')
  })

  it('should invert extglob with double bang', function () {
    assert.equal(invert('!!.'), '!(.)')
    assert.equal(invert('  ! !  .'), '!(.)')
    assert.equal(invert(' !!a !b'), '!(a !b)')
    assert.equal(invert('!.'), '.')
    assert.equal(invert('!(.)'), '.')
  })
})
