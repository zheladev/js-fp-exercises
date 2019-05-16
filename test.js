var l = require('./lib');

console.log(add(1, 2, 3, 4, 5, 6, 8))
console.log(sub(9, 5, 2))

const double = x => 2 * x
const negate = x => x * -1
const fn = compose(negate, double, double, add)
console.log(fn(1, 1, 1, 1))

const bigArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
    [19, 20, 21]
]

console.log(transpose(...bigArr))

console.log(zipmap(["a", "b", "c"], [1, 2, 3]))

console.log(zipwith(add, [1, 2, 3], [1, 2, 3]))