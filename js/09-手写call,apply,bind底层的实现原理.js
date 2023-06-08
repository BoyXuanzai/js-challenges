// call函数
Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== 'function') {
    return console.error('type error');
  }
  let result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  const context = context  ||  window;
  // 获取参数
  const args = [...arguments].slice(1);
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};
// apply参数
Function.prototype.myApply = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    return console.error('Type error');
  }
  // 判断 context 是否存在，如果未传入则为 window
  const context = context | window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};
// bind函数
Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    return console.error('Type error');
  }
  // 保存对当前函数的引用
  let fn = this;
  // 获取参数
  const args = [...arguments].slice(1);
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
