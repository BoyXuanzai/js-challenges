// 1. arr=[1,2,3,4,5,6,7,8,9,10]，求和
var arr0 = [1, 2, 3, 4, 5, [6, 7], 8, 9, 10]; // 不适合嵌套数组的情况
let sum0 = arr0.reduce((p, c) => (p += c), 0);
console.log(sum0);

// arr=[1,2,3,[[4,5,[8,[10,11],9]],6],7,8,9]，求和
var arr1  =[1,2,3,[[4,5,[8,[10,11],9]],6],7,8,9];
var sum1 = arr1
  .toString()
  .split(',')
  .reduce((total, i) => (total += Number(i)), 0);
console.log(arr1.toString()); // 1, 2, 3, 4, 5, 6, 7, 8, 9;
console.log(arr1.toString().split(',')); // [ '1', '2', '3','4', '5', '6','7', '8', '9']
console.log(sum1); // 45

// 递归实现：
// let arr = [1, 2, 3, 4, 5, 6]; 不适合嵌套数组的情况
function add (arr) {
  if (arr.length == 1) return arr[0]
  return arr[0]+add(arr.slice(1))
}
console.log(add([1, 2, [3, 4], 5, 6]));
