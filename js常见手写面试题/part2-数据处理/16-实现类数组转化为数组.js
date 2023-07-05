// 类数组转换为数组的方法有这样几种：
// 1.通过 call 调用数组的 slice 方法来实现转换
Array.prototype.slice.call(arrayLike);
// 2.通过 call 调用数组的 splice 方法来实现转换
Array.prototype.splice.call(arrayLike, 0);
// 3.通过 apply 调用数组的 concat 方法来实现转换
Array.prototype.concat.apply([], arrayLike);
// 4.通过 Array.from 方法来实现转换
Array.from(arrayLike);
// 5.使用拓展运算符

