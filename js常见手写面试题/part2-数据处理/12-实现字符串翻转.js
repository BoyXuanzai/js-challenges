// 在字符串的原型链上添加一个方法，实现字符串翻转：
String.prototype._reverse = function () {
  return this.split('').reverse().join('');
};
var str1 = 'HELLO';
var res1 = str1._reverse();
console.log(res1); // OLLEH

// 需要注意的是，必须通过实例化对象之后再去调用定义的方法，不然找不到该方法。
