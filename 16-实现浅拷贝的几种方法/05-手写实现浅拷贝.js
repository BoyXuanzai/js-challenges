// 浅拷贝的实现
function shallowCopy(object) {
  // 只拷贝对象
  if (!object || typeof object !== 'object') return;
  let newObj = Array.isArray(object) ? [] : {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] = object[key];
    }
  }
  return newObj;
}
