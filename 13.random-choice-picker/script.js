const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

// 禁止回车键
textarea.addEventListener('keydown', (e) => {
  if(e.keyCode == 13) {
    e.returnValue = false
  }
})

textarea.addEventListener('input', () => {
  const tags = textarea.value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
  
})
