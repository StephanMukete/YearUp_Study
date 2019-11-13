// user needs to send messages
//messages need to be stored somewhere
//need to be able to read individual messages

//classes start with a capital letter
// most times are singular in name
// let inbox = []
// class Message {
//   constructor(content) {
//     this.content = content
//     console.log('new msg created')
//     inbox.push(this)
//   }
// }
//
// let msg1 = new Message('This is the first message')
// let msg2 = new Message('This is the second message')

// any object based on a class is called an instance
// an instance rrepresents one object based on the class name


class Message {
  constructor(receiver, content) {
    this.receiver = receiver
    this.content = content
    console.log('new msg created')
    this.seen = false;
    this.seenAt = null;
    this.block = false;
  }
}

// messages need to be stored with the user they belong to
class User {
  constructor(name, inbox, block) {

    this.name = name
    this.inbox = []
    this.block = []
    console.log('new user created');
  }
  blockUser(user){
    this.block.push(user)
  }
  unBlockUser(user){
    this.name = name
    this.block = false
    return `You have unblocked${name}`
  }
  sendMessage(receiver, content){

    if(receiver.block.includes(this)){
        console.log('sorry you have been blocked');

    }
    else {
      let msg = new Message(receiver, content)
      receiver.inbox.push(msg)
      return `Your message to ${receiver.name} has been sent`
    }

  }

  readMessage(i) {
  this.inbox.seen = true
  this.inbox.seenAt = new Date()
  return this.inbox[i].content
  }

}


let user1 = new User('Stephan')
let user2 = new User('Mukete')
let user3 = new User('Aseel')
let user4 = new User('Isaac')
let user5 = new User('caleb')
 // sendMessage('user2', 'The boy')

 let msg1 = new Message('Mukete','This is the first message')
 let msg2 = new Message('Aseel','This is the second message')

// viewUnread(){
//   let unread = []
//   for (msg of this.inbox) {
//     if (msg.seen === false) {
//       unread.push(msg)
//       console.log(msg.content);
//     }
//   }
//   return unread
// }

//check if message is read
//filter msg between read and unread
//see when it was seen
// blocking other users
//add and remove people from conversation

const Conversation = []

class Conversation {
  constructor() {
    this.id = Conversation.length + 1
    this.
  }
}
