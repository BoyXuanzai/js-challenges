// 递归
function fn(n) {
    if (n == 0) return 0
    if (n == 1) return 1
    return fn(n - 1) + fn(n - 2)
}
// 优化
function fibonacci2(n) {
    const arr = [1, 1, 2]
    const arrLen = arr.length
    if (n <= arrLen) {
        return arr[n]
    }
    for (let i = arrLen; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
}