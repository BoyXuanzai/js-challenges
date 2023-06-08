const dateFormat = (dataInput, format) => {
  let ss = dataInput.getSeconds();
  let mm = dataInput.getMinutes();
  let hh = dataInput.getHours();
  let dd = dataInput.getDate();
  let MM = dataInput.getMonth() + 1;
  let yyyy = dataInput.getFullYear();
  format = format.replace(/yyyy/, yyyy);
  format = format.replace(/MM/, MM);
  format = format.replace(/dd/, dd);
  format = format.replace(/hh/, hh);
  format = format.replace(/mm/, mm);
  format = format.replace(/ss/, ss);
  return format;
};
// 输入
var date1 = dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd'); // 2020/12/01
console.log(date1);
var date2 = dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd'); // 2020/04/01
console.log(date2);
var date3 = dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日'); // 2020年04月01日
console.log(date3);
var date4 = dateFormat(new Date(), 'yyyy年MM月dd日hh:mm:ss'); // 2023年6月8日10:35:10
console.log(date4);
