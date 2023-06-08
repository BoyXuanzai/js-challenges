// console.log('===========常见的正则表达式==========');
// console.log('1.匹配16进制颜色值');
// var regColor = /#([0-9a-fA-F]{6} | [0-9a-fA-F]{3}) /g;
// console.log('2.匹配日期');
// var regDate = /^[0-9]{4}-(0[1-9] | 1[1-2])- (0[1-9] | [12][0-9] | 3[0-1])$/;
// console.log('3.匹配qq号');
// var reqQQ = /^[1-9][0-9]{4,10}/;
// console.log("4. 手机号正则");
// var reqMobile = /^1[345678]\d$/g;
// console.log('');
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });
// const promise2 = promise1.then(() => {
//   throw new Error('error!!!');
// });
// console.log('promise1', promise1);
// console.log('promise2', promise2);
// setTimeout(() => {
//   console.log('promise1', promise1);
//   console.log('promise2', promise2);
// }, 2000);
class Person {
  constructor(name) {
   this.name =name
  }
}
console.log(new Person("小明"));
