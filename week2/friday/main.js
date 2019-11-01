// document.addEventListener('click', () => {
//   alert('You clicked a document')
// })
// let greeting = () => {
//   console.log('Hello');
// }
// let greetByName = (name) => {
//   console.log(`Hello, ${name}`);
// }
// let doubleNumber = (n) => {
//   return n*2
// }
//
// let helloWorld = () => {
//   return 'helloWorld'
// }

let createButton = document.getElementById('create-button')
let color1 = green
let color2 = red
let generateGrid = (color1, color2) =>{

let rows = prompt('how many rows')
let cols = prompt('how many columns')

console.log(rows)
console.log(cols)
let divCount = +rows * +cols

let grid = document.getElementById('grid')
grid.style.display = 'grid'

let i = 0;
while (i < (divCount)) {
  let div = document.createElement('div')
  if (i% 2 == 0) {
    div.style.background = color1
  } else {
    div.style.background = color2
  }
  grid.appendChild(div)
  i++
}
// for (let i = 0; i < rows; i++) {
//   let div = document.createElement('div')
//   grid.appendChild(div)
// }
// for (let i = 0; i < cols; i++) {
//   let div = document.createElement('div')
//   grid.appendChild(div)
// }

grid.style.gridTemplate = `repeat(${rows}, 150px) / repeat(${cols}, 150px)`
grid.style.gridGap = '3px'
}

createButton.addEventListener('click', () => generateGrid(color1,color2))
