// 输入字符串s，以及其重复的次数，输出重复的结果，例如输入abc，2，输出abcabc。
function repeat(str, n) {
  return new Array(n + 1).join(str);
}
// 递归
function repeat1(str, n) {
  return n > 0 ? str.concat(repeat1(str, --n)) : '';
}
