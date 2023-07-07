function SuperFunction (flag1) {
  this.flag1 =flag1
}
function SubFunction (flag2) {
  this.flag2 =flag2
}
let superInstance = new SuperFunction(true);
SubFunction.prototype = superInstance
var subInstance = new SubFunction(false)
console.log(subInstance.flag1);
console.log(subInstance.flag2);