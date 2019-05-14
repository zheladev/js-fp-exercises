//return array with arguments passed
module.exports = clist = (...args) => {
    return args;
}

//return sum of args
module.exports = add = (...args) => {
    return args.length > 1 ?
        args.reduce((n, m) => (n + m)) :
        args[0].reduce((n, m) => (n + m));
}

//return substraction of args from left to right (first one being the number to substract from)
module.exports = sub = (...args) => {
    return args.length > 1 ?
        args.reduce((n, m) => (n - m)) :
        args[0].reduce((n, m) => (n - m));
}

module.exports = compose = (...fn) => (...n) => {
    return fn.reduceRight((acc, curr) => curr(acc), n);
}

module.exports = transposenxn = (...n) => {
    return n.reduce((acc, _, i, arr) => (acc[i] = arr.map((m) => m[i]), acc), Array(n.length))
}

module.exports = transpose = (...n) => {
    return n[0].map((_, i) => n.map((m) => m[i]))
}

module.exports = zipmap = (...n) => {
    return n[0].reduce((acc, curr, i) => (acc[curr] = n[1][i], acc), {})
}