function throttle(fn, wait) {
  let curTime = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let nowTime = Date.now();
    if (nowTime - curTime >= wait) {
      return fn.apply(context, args);
    }
  };
}
