function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument is must be an Array`);
    }
    let resolveNum = 0;
    const promisesNum = promises.length;
    const resolveResult = [];
    for (let i = 0; i < promisesNum; i++){
      Promise.resolve(promises[i]).then(value => {
        resolveNum++
        resolveResult[i] = value
        if (resolveNum === promisesNum) {
          return resolve(resolveResult)
        }
      }, err => {
        return reject(err)
      }
      )
    }
  });
}
// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});
promiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});
