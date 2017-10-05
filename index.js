// compose

function compose (fn1, fn2) {
  return i => fn1(fn2(i))
}

function composeN (/* fn1, fn2, fn3... */) {
  var args = Array.prototype.slice.call(arguments)

  return args.reduce(compose)
}

module.exports = composeN
