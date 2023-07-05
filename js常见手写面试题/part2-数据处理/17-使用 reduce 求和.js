// 情况 1  
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = arr.reduce((p, c) => (p += c), 0);
console.log(sum);

// 情况 2
var arr2 = [1, 2, 3, [[4, 5], 6], 7, 8, 9];
var sum2 =arr2.flat(Infinity).reduce((p, c) => (p += c), 0);
console.log(sum2);

// 情况 3
var arr3 = [{ a: 1, b: 3 }, { a: 2, b: 3, c: 4 }, { a: 3 }];
var sum3 =arr3.reduce((p,c)=>p+=c["a"],0)
var sum4 = arr3.reduce((p, c) => (p += c['b']), 0);
var sum5 = arr3.reduce((p, c) => (p += c['c']), 0);
console.log(sum3); // 6
console.log(sum4); // NaN
console.log(sum5); // NaN