var test = require('tape')
var compose = require('./index')

test('test compose', t => {
  function plusOne (i) {
    return i + 1
  }

  function squared (i) {
    return i * i
  }

  function plus5 (i) {
    return i + 5
  }

  var squarePlusOne = compose(squared, plusOne)

  t.equals(squarePlusOne(2), 9, 'works')

  var a = [plusOne, squared, plus5].reduce(compose)

  t.equals(a(2), 9, 'works')
  t.end()
})
