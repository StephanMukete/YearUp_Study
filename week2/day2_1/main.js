// // var box = document.getElementById('box')
// // var yourName = 'stephan'
// //
// // // var name = prompt('what is your name?')
// // var main = prompt('who is your main')
// // // if (name.toLowerCase() === yourName) {
// // //   box.classList.add("red")
// // // }
// // // else {
// // //   box.classList.add('blue')
// // // }
// //
// // box.style.backgroundImage =`url('https://www.smashbros.com/assets_v2/img/fighter/${main.toLowerCase()}/main.png')`
// // box.style.backgroundSize = 'cover'
//
// var grid = document.getElementById('grid')
// var characters = []
//
// for (let i = 0; i < 6; i++)  {
//   let char = prompt('choose a character').toLowerCase()
//   characters.push(char);
//   let imgUrl = 'https://www.smashbros.com/assets_v2/img/fighter/${char}/main.png'
//   let el = document.createElement('div')
//   el.style.backgroundImage = `url('${imgUrl}')`
//   el.style.backgroundSize = 'cover'
//
//   document.body.appendChild(el)
// }
// grid.style.gridTemplate = 'repeat(2, 150px) / repeat(3, 150px)'
// console.log(characters)
var characters = []
for (let i = 0; i < 2; i++) {
  let char = prompt('Choose a character').toLowerCase()
  characters.push(char)
  let imgUrl = `https://www.smashbros.com/assets_v2/img/fighter/${char}/main.png`
  let el = document.createElement('div')
  el.style.backgroundImage = `url('${imgUrl}')`
  el.style.backgroundSize = 'cover'
  el.style.width = '150px'
  el.style.height = '150px'
  document.body.appendChild(el)
}
