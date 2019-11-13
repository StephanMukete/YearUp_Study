// user needs to send messages
//messages need to be stored somewhere
//need to be able to read individual messages

//classes start with a capital letter
// most times are singular in name
let inbox = []
class Message {
  constructor(content) {
    this.content = content
    console.log('new msg created')
    inbox.push(this)
  }
}

let msg1 = new Message('This is the first message')
let msg2 = new Message('This is the second message')

// any object based on a class is called an instance
// an instance rrepresents one object based on the class name
