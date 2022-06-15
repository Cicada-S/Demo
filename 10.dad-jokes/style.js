const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
  let results = await fetch('https://api.xygeng.cn/one').then(res => res.json())

  jokeEl.innerText = results.data.content
}