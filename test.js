var test = require('tape')
var composeN = require('./index')

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

  var squarePlusOne = composeN(squared, plusOne)

  t.equals(squarePlusOne(2), 9, 'works')

  var a = composeN(plusOne, squared, plus5)

  t.equals(a(2), 50, 'works')
  t.end()
})
