// 实现es6中数组的flat函数
function myFlat(arr, depth) {
  if (!Array.isArray(arr) || depth <= 0) {
    return arr;
  }
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(myFlat(cur, depth - 1));
    } else {
      return prev.concat(cur);
    }
  }, []);
}
const arr = [1, 2, [3, 4, [5, 6]], 7];
console.log(myFlat(arr)); // [1, 2, 3, 4,5, 6, 7]
