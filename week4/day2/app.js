class Building {
  constructor(address){
    this.address = address
    this.tenants = []
  }
  addTenants(name) {
    this.tenants.push(name)
  }
}

class Apartment {
  constructor(apt_no) {
    this.apt_no = apt_no
  }
}

let building  = new Building('123 Main St')
