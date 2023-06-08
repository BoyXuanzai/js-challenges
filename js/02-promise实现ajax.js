function getJson(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.responseText);
      } else {
        reject(this.statusText);
      }
    };
    xhr.onerror = function () {
      reject(this.statusText);
    };
    // 设置请求头
    xhr.setRequestHeader('Accept', 'application/json');
    // 设置接收的数据格式
    xhr.responseType('json');
  });
}
