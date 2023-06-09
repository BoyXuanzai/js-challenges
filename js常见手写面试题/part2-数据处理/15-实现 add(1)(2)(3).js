// 1）粗暴版
function add1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add1(1)(2)(3)); //6
// 2）柯里化解决方案
// 参数长度固定
var add2 = function (m) {
  var temp = function (n) {
    return add2(m + n);
  };
  temp.toString = function () {
    return m;
  };
  return temp;
};
console.log(add2(3)(4)(5)); // 12
console.log(add2(3)(6)(9)(25)); // 43
// 参数长度不固定;
function add (...args) {
  // 求和
  return args.reduce((a, b) => (a += b));
}
function currying (fn) {
  let args = []
  return function temp (...newArgs) {
    if (newArgs.length) {
      args = [
        ...args,
        ...newArgs
      ]
      return temp
    } else {
      let val = fn.apply(this, args);
      args = []; //保证再次调用时清空
      return val;
    }
  }
}
let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
