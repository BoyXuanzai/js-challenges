let imageAsync = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = function () {
      console.log('图片加载成功');
      resolve(img);
    };
    img.onerror = function (err) {
      console.log('图片加载失败');
      reject(err);
    };
  });
};
imageAsync(
  'https://img01.51jobcdn.com/fansImg/CompLogo/4/3991/3990747/3990747_300.png?637316182941381439'
)
  .then(() => {
    console.log('加载成功');
  })
  .catch((err) => {
    console.log('加载失败', err);
  });
