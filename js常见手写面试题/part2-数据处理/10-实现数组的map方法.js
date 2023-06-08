Array.prototype._map = function (fn) {
  if (typeof fn !== 'function') {
    throw Error('参数必须是一个函数');
  }
  const res = [];
  for (let i = 0, len = this.length; i < len; i++) {
    res.push(fn(this[i]));
  }
  return res;
};
const arr = [1, 2, 3, 4];
const newArr = arr._map((item) => item * 2);
console.log(newArr); // [ 2, 4, 6, 8 ]
