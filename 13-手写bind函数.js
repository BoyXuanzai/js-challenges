Function.prototype.MyBind = function (context) {
  if (typeof this !== 'function') {
    console.error('Type Error');
  }
  let args = [...arguments].slice(1);
  fn = this;
  let context = context || window;
  return function Fn() {
    return function () {
      this instanceof Fn ? this : context;
      args.concat(...arguments);
    };
  };
};
