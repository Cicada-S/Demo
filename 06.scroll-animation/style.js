let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  // 获取到窗口的高度
  const triggerBottom = window.innerHeight / 5 * 4
  // const triggerBottom = window.innerHeight

  boxes.forEach(box => {
    // 获取到box.top距离窗口顶部的数值
    let boxTop = box.getBoundingClientRect().top
    // let boxTop = box.getBoundingClientRect().bottom

    if(boxTop < triggerBottom) {
      box.classList.add('show')
    }else {
      box.classList.remove('show')
    }
  })
}