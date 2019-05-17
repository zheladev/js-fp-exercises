var l = require('./lib');

// console.log(add(1, 2, 3, 4, 5, 6, 8))
// console.log(sub(9, 5, 2))

// const double = x => 2 * x
// const negate = x => x * -1
// const fn = compose(negate, double, double, add)
// console.log(fn(1, 1, 1, 1))

// const bigArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
//     [13, 14, 15],
//     [16, 17, 18],
//     [19, 20, 21]
// ]

// console.log(transpose(...bigArr))

// console.log(zipmap(["a", "b", "c"], [1, 2, 3]))

// console.log(zipwith(add, [1, 2, 3], [1, 2, 3]))

// console.log('///////////////')

// console.log([1, 2].push([3, 4]))
// console.log(cons([1, 2], [2, 3, 4, 5, 6]))
// console.log(cons(1, 2, 3, 4, 5, 6))
// console.log(cons(1, [2, 3, 4, 5]))

// console.log(cdr([1, 2, 3, 4, 5]))

const arr = [1, 2, 3]
console.log(arr[0])
console.log(arr[1])
console.log(arr.slice(2))

console.log(interleave([1, 2, 3], ["a", "b", "c"], [4, 5, 6]))

const gt5 = n => n > 5;
const even = n => n % 2 == 0;

console.log(freq("asjkdhaskdjaksd"))
console.log(freq([1, 2, 3, 4, 1, 3, 4, 2, 1, 1, 1, 1, 1, 1]))
console.log(partition(3, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9]))