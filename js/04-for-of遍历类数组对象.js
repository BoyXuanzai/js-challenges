var obj = {
  a: 1,
  b: 2,
  c: 3,
};
obj[Symbol.iterator] = function* () {
  var keys = Object.keys(obj);
  for (const k of keys) {
    yield [k, obj[k]];
  }
};
for (const [k, v] of obj) {
  console.log(k, v);
}
