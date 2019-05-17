//return array with arguments passed
module.exports = clist = (...args) => {
    return args;
}

//return sum of args
module.exports = add = (...args) => {
    return args.flat().reduce((n, m) => (n + m));
}

//return substraction of args from left to right (leftmost being the number to substract from)
module.exports = sub = (...args) => {
    return args.flat().reduce((n, m) => (n - m));
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

module.exports = zipwith = (f, ...n) => {
    return transpose(...n).map(m => f(...m));
}

module.exports = cons = (a, ...b) => {
    return b.reduce((acc, curr) => (acc.push(curr), acc), Array.isArray(a) ? a : [a]);
}

module.exports = car = (a) => {
    if (!Array.isArray(a)) throw Error('Not a cons.');
    return a[0];
}

module.exports = cdr = (a) => {
    return a.slice(1);
}

module.exports = partial = (f, ...n) => (...m) => {
    return f(...n, ...m);
}

module.exports = flip = (f) => (...n) => {
    if (n.length == 1) return f(n);
    return n.length > 2 ? f(n[1], n[0], n.slice(2)) : f(n[1], n[0]);
}

module.exports = flips = (f) => (...n) => {
    return f(n.reverse());
}

module.exports = take = (n, ...seq) => {
    return seq.slice(0, n);
}

module.exports = drop = (n, ...seq) => {
    return seq.slice(n);
}

module.exports = flatten = (tree) => {
    return tree.flat(Infinity);
}

module.exports = interleave = (...n) => {
    return transpose(...n).flat();
}

module.exports = every_pred = (...filters) => (n) => {
    return filters.filter((f) => f(n)).length == filters.length;
}

module.exports = any_pred = (...filters) => (n) => {
    return filters.filter((f) => f(n)).length > 0;
}

module.exports = no_pred = (...filters) => (n) => {
    return filters.filter((f) => f(n)).length == 0;
}

module.exports = freq = (seq) => {
    seq = typeof seq === 'string' ? seq.split('') : seq;
    return seq.reduce((acc, curr) => (!!acc[curr] && Number.isInteger(acc[curr]) ? acc[curr]++ : acc[curr] = 1, acc), {});
}