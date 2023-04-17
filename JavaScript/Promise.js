const imgUrl = "https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/400394838/android/sticker.png";
const imgPromise = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error("圖片錯誤"));
    };
  });
}

imgPromise(imgUrl)
  .then(img => {
    document.body.appendChild(img);
  })
  .catch(error => {
    document.body.innerHTML = error;
  })