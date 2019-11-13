//objects consists of key value pairs
// == dictionaries in python
//they are composite datatypes
//key:value

//initialize method
let person1 = new Object() //object.constructor

// object literal
let person2 = {}

let person3 = {name: 'Stephan', email: 'elondostephan@gmail.com', age: Infinity}
let keys = Object.keys.person3
let values = Object.values.person3
let array = ['one', 'two', ['three', 'four']] // multidimentional array

console.log(array[2][1]);

person4 = { //tree data structure
  name: "John",
  age: 56,
  child: {
    name: "Element",
    age: 3,
    favouriteToy: 'car'
  }
}

// const kingdom = {
//   king: {
//     name: "Stephan",
//     knights{
//       k1: {name: 'Lancelot'},
//       k2: {name: 'Tristan'}
//     }
//   }
// }

class kingdom {
  constructor(x) {
    this.name = x
  }
}
let kingdom1 = new kingdom('zurubu')
