// ES5
function sum () {
  let sum = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    sum += item * 1;
  });
  return sum;
}
// ES6
function sum(...nums) {
  let sum = 0;
  nums.forEach(function (item) {
    sum += item * 1;
  });
  return sum;
}

