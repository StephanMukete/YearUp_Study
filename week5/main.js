// let list1 = []
// let list2 = []
//
// list1.pop()
// list2.shift()
//
// class Stack {
//   constructor(data = []) {
//     this.data = data
//   }
//
//   removeItem(){
//     this.data.pop()
//   }
// }
// class Queue {
//   constructor(data = []) {
//     this.data = data
//   }
//
//   removeItem(){
//     this.data.shift()
//   }
// }
//
// let stack = new Stack()
// stack.removeItem()
//
// let queue = new Queue
// queue.removeItem()
//


queryPokemonAPI = () =>{
  fetch('https://fizal.me/pokeapi/api/v2/id/25.json')
  .then((res) => {return res.json()})
.then((data) => {
  console.log(data);
})}
