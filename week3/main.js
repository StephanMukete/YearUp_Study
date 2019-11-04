document.addEventListener('DOMContentLoaded', () => {
  let main = document.getElementById('main')

  main.addEventListener('click', () => {
    console.log('successful');
  })
})
setTimeout(() => {
  main.remove()
}, 5000)
