console.log('思路：将传入的对象作为原型');
function createObj(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var obj1 = createObj({ x: 200 });
console.log(obj1);
