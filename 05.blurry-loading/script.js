let loadText = document.querySelector('.loading-text')
let bg = document.querySelector('.bg')

// 进度
let load = 0

// 定时每x毫秒更改进度
let init = setInterval(blurring, 20)

function blurring() {
  load++

  if(load == 99) {
    clearInterval(init)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// scale 函数
const scale = (number, inMin, inMax, outMin, outMax) => {
  num = (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  console.log(num);
  return num
}
