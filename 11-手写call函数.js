Function.prototype.MyCall = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    return console.error('Type Error');
  }
  // 判断用户是否传入context
  let context = context || window;
  // 获取第一个参数后面的参数数组
  let args = [...arguments].slice(1);
  let result = null;
  // 讲调用函数作为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 删除对象属性
  delete context.fn;
  return result;
};
