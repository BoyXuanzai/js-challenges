let obj = {};
let input = document.getElementById('input');
let span = document.getElementById('span');
// 数据劫持
Object.defineProperty(obj, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('读取值');
  },
  set(newVal) {
    input.value = newVal;
    span.innerHTML = newVal;
  },
});
input.addEventListener('keyup', function (e) {
  obj.text = e.target.value;
});
