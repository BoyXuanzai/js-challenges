Function.prototype.MyApply = function (context) {
  // apply(this,[arg1.arg2,arg3,...])
  if (typeof this !== 'function') {
    return console.error('Type Error');
  }
  let context = context || window;
  let result = null;
  context.fn = this;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
