Array.prototype._filter = function (fn) {
  if (typeof fn !== 'function') {
    throw Error('参数必须是一个函数');
  }
  let res = [];
  for (let i = 0, len = this.length; i < len; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
};
const arr = [1, 2, 3, 4];
const newArr = arr._filter((item) => item > 2);
console.log(newArr); // [ 3, 4 ]
