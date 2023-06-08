var obj = {
  0: 'one',
  1: 'two',
  length: 2,
};
// 直接用Array.from转为数组即可
obj = Array.from(obj);
for (var k of obj) {
  console.log(k);
}
