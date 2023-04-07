const btn = document.querySelector('button');

function payMoney(){
  console.log("clicking");
  console.log(this);
}

function debounce(func, delay){
  let timer;
  return () => {
    // const _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      // func.call(_this);
      console.log(_this);
    }, delay)
  }
}

btn.addEventListener('click', debounce(payMoney, 1000));
// btn.addEventListener('click', payMoney, 1000);