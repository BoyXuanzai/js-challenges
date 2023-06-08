// (1) 递归实现
// 普通的递归思路很容易理解，就是通过循环递归的方式，一项一项地去遍历，如果每一项还是一个数组，那么就继续往下遍历，利用递归程序的方法，来实现数组的每一项的连接：
let arr = [1, [2, [3, 4, 5]]];
function flattern(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattern(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattern(arr));
// （2）reduce 函数迭代
// 从上面普通的递归函数中可以看出，其实就是对数组的每一项进行处理，那么其实也可以用reduce 来实现数组的拼接，从而简化第一种方法的代码，改造后的代码如下所示：
let arr1 = [1, [2, [3, 4]]];
function flattern1(arr) {
  return arr.reduce(function (pre, next) {
    return pre.concat(Array.isArray(next) ? flattern1(next) : next);
  }, []);
}
console.log(flattern1(arr1));
// （3）扩展运算符实现
// 这个方法的实现，采用了扩展运算符和 some 的方法，两者共同使用，达到数组扁平化的目的
let arr2 = [1, [2, [3, 4]]];
function flattern2(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    // 一层一层展开
    // 第一次循环： arr ： [ 1, [ 2, [ 3, 4 ] ] ]
    // 第二次循环： arr : [ 1, 2, [ 3, 4 ] ]
    // 第三次循环： arr：[ 1, 2, 3, 4 ]
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flattern2(arr2));
// （4）split 和 toString
// 通过这两个方法可以将多维数组直接转换成逗号连接的字符串，然后再重新分隔成数组。
let arr3 = [1, [2, [3, 4]]];
function flattern3(arr) {
  return arr
    .toString()
    .split(',')
    .map((item) => Number(item));
}
console.log(flattern3(arr3));
// （5）ES6 中的 flat
// 我们还可以直接调用 ES6 中的 flat 方法来实现数组扁平化。flat 方法的语法：arr.flat([depth])
// 其中 depth 是 flat 的参数，depth 是可以传递数组的展开深度（默认不填、数值是 1），即展开一层数组。如果层数不确定，参数可以传进 Infinity，代表不论多少层都要展开：
// 可以看出，一个嵌套了两层的数组，通过将 flat 方法的参数设置为 Infinity，达到了我们预期的效果。其实同样也可以设置成 2，也能实现这样的效果。在编程过程中，如果数组的嵌套层数不确定，最好直接使用 Infinity，可以达到扁平化。
let arr4 = [1, [2, [3, 4]]];
function flattern4(arr) {
  return arr.flat(Infinity);
}
console.log(flattern4(arr4));
// （6）正则和 JSON 方法
// 其中仍然采用了将 JSON.stringify 的方法先转换为字符串，然后通过正则表达式过滤掉字符串中的数组的方括号，最后再利用 JSON.parse 把它转换成数组
let arr5 = [1, [2, [3, 4]]];
function flattern5(arr) {
  let str = JSON.stringify(arr); //  [1, [2, [3, 4]]];
  str = str.replace(/(\[|\])/g, ''); // 1,2,3,4
  str = '[' + str + ']'; // [1,2,3,4]
  return JSON.parse(str);
}
console.log(flattern5(arr5));
