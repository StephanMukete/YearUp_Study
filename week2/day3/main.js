// console.log('welcome to javascript');
//
//
// function greetUser(a) {
//   console.log('hello user')
// }
//
// // changeColor = () => {
// //   document.body.style.backgroundColor = 'red'
// // }
// //referencing a function
// greetUser
//
// //invoking a function
// greetUser(a)
// // console.log(changeColor());

// function woodChipper(wood1, wood2) {
//   let a = wood1.split('')
//   let b = wood2 + 25;
//   console.log(a);
//   console.log(b);
//   return 'done'
// }
// showDate = () => {
//   alert(new Date())
// }
// document.addEventListener('click', showDate)
//
// console.log();
// ,
// createUser = () => {
//    newUser = ' Roy'
//   // console.log(newUser);
//    greetUser = () =>{
//     console.log('Hello' + newUser);
//   }
//   greetUser()
// }

// const a = 5
// let b =4
//
//
// function add(){
//   a = 3
//   console.log(b + 4);
// }
// add()
// document.addEventListener('click', function() {
//   console.log('hello from anonymous');
// })
//
// document.addEventListener('click', () =>{
//   console.log('hello from anonymous arror function');
// })
// let listOfFunctions = []
//
// let greet = () => {
//   console.log('me');
//   return 'Hello'
// }
// let greeting = greet()
// let substitute = () => {
//   let functionA = (item2) => {
//     return functionA(item2)
//   }
//   let functionB = () => {
//      return 'water'
//   }
//   let functionc = (item2) => {
//     return functionA()
//   }
//   let functionD = () => {
//     return 'earth'
//   }
//    return functionc(functionB)
//
// }
// let result = substitute()
// let list = []
//
// let master = () => {
//   let functionA = (x) => {
//     x.push(functionB())
//     return 'content'
//   }
//   let functionB = () => {
//     return 'text'
//   }
//
//   let functionC = (a) => {
//     functionA(a)
//   }
//   return functionC(list)
// }
//
// let ans = master()

let list = []
let master = () => {
  let functionA = (x) => {
    return functionB(x)
  }

  let functionB = (y) => {
    y.push(functionC)
    return 'done'
  }

  let functionC = () => {
    console.log('complete')
    return 100
  }

  functionA(list)
  return list[0]()
}
ans2 = master();
