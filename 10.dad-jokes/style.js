const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  let res = await fetch('https://api.xygeng.cn/one', config)

  let { data } = await res.json()

  jokeEl.innerText = data.content
}