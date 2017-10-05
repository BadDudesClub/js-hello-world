// compose

function compose (fn1, fn2) {
  return i => fn1(fn2(i))
}

module.exports = compose
