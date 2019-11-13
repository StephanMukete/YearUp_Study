class Unit {
  constructor(name) {
      this.name = name
      this.hp = 100
      this.atk = 10
      this.job = 'Squire'
      this.alive = true
  }

  attack(target) {
    target.hp -= this.atk
    if (target) {
      target.alive = false
      return `${target.name} has fallen`
    }
    return `${this.name} attacks ${target.name}`
  }
}
class Squire  extends Unit{
  constructor() {
    super()
    this.job = 'Squire'
  }
}
class Knite extends Unit {
  constructor(name) {
  super(name)
  this.job = 'Knite'
  }
}

class Mage extends Unit{
  constructor(name) {
    this.hp -= 25
    this.mag = += 25
    this.job = 'Mage'
  }
}

let knite = new Knite('Stephan')
let squire = new Squire('Mukete')
