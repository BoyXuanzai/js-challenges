const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
    // 1
    // 2
    // 4
// promise.then 是微任务，它会在所有的宏任务执行完之后才会执行
// 同时需要promise内部的状态发生变化
// 因为这里内部没有发生变化，一直处于pending状态
// 所以不输出 3。