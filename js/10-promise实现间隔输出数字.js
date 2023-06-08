async function logger(n) {
for (let i = 1; i <= n; i++) {
let n = await _promise(i);
console.log(n);
}
}
function _promise(i) {
return new Promise((resolve, reject) => {
setTimeout(() => resolve(i), 1000);
});
}
logger(4)
