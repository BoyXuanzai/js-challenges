function curry(fn, args) {
  let length = fn.length;
  let args = args || [];
  return function () {
    let subArgs = args.slice(0);
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }
    if (subArgs.length >= length) {
      return fn.apply(this, subArgs);
    } else {
      return curry.call(this, fn, subArgs);
    }
  };
}
// es6实现
function curry1(fn, ...args) {
  return fn.length <= args.length
    ? fn(...args)
    : curry1.bind(null, fn, ...args);
}
