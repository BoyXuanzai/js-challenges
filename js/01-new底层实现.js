// new操作符的执行过程：
// （1）首先创建了一个新的空对象
// （2）设置原型，将对象的原型设置为函数的 prototype 对象。
// （3）让构造函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
// （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

function objectFactory() {
  let newObj = null;
  let result = null;
  let constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== 'function') {
    console.error('type error');
    return;
  }
  // 新建一个对象，并将构造函数的prototype作为这个对象的原型
  newObj = Object.create(constructor.prototype);
  result = constructor.apply(newObj, arguments);
  let flag =
    result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObj;
}
