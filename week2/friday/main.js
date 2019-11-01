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
    div.style.background = '#ccc'
  } else {
    div.style.background = '#333'
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
