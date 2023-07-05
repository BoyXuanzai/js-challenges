let url =
  'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
var parseUrl =parseParam(url);
console.log(parseUrl);
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
// function parseParam(url) {
//   const paramStr = /.+\?(.+)$/.exec(url)[1]; // user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled
//   const paramArr = paramStr.split('&');
//   // [
//   // 'user=anonymous',
//   // 'id=123',
//   // 'id=456',
//   // 'city=%E5%8C%97%E4%BA%AC',
//   // 'enabled']
//   let paramObj = {};
//   paramArr.forEach((param) => {
//     if (/=/.test(param)) {
//       // 处理有value的参数
//       let [key, val] = param.split('='); // 分割 key 和 value
//       val = decodeURIComponent(val); // 解码
//       val = /^\d+$/.test(val) ? parseFloat(val) : val;
//       if (paramObj.hasOwnProperty(key)) {
//         paramObj[key] = [].concat(paramObj[key], val)
//       } else {
//         paramObj[key] = val
//       }
//     }else {
//       paramObj[param]=true
//     }
//   });
//   return paramObj
// }
function parseParam (url) {
  let paramObj = {}
  const paramStr = /.+\?(.+)$/.exec(url)[1];
  const paramArr = paramStr.split("&")
  paramArr.forEach(param => {
    if (/=/.test(param)) {
      let [key, val] = param.split("=")
      val = decodeURIComponent(val)
      val = /^\d+$/.test(val) ? parseFloat(val) : val
      if (paramObj.hasOwnProperty(key)) {
        paramObj[key] = [].concat(paramObj[key],val)
      } else {
        paramObj[key]=val
      }
    }
    else {
      paramObj[param]= true
    }
  })
  return paramObj
}