Promise.resolve('1')
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log('finally');
  });
Promise.resolve('2')
  .finally(() => {
    console.log('finally2');
    return '我是finally2返回的值';
  })
  .then((res) => {
    console.log('finally2后面的then函数', res);
  });
// 1
// finally2
// finally
// finally2后面的then函数 2


// finally()一般用的很少，只要记住以下几点就可以了：
// finally()方法不管Promise对象最后的状态如何都会执行
// finally()方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是无法知道Promise最终的状态是resolved还是rejected的
// 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。
// finally本质上是then方法的特例