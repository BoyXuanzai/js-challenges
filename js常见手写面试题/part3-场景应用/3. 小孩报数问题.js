function childNum(num, count) {
  let allChild = [];
  for (let i = 0; i < num; i++) {
    allChild[i] = i + 1;
  }
  let exitCount = 0
  let counter = 0
  let curIndex = 0
  while (exitCount < num - 1) {
    if (allChild[curIndex] !== 0) counter++
    if (counter == count) {
      allChild[curIndex] = 0
      exitCount++
      counter=0
    }
    curIndex++
    if (curIndex == num) {
      curIndex=0
    }
    
  }
      for (i = 0; i < num; i++) {
        if (allChild[i] !== 0) {
          return allChild[i];
        }
      }
}
const res = childNum(30, 3);
console.log(res);
