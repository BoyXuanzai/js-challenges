const arr = [[1, 2], 3, [4, 5]];
let sum = arr.reduce((p, c) => p.concat(c));
console.log(sum);
let sum2 = arr.reduceRight((p, c) => p.concat(c));
console.log(sum2);
