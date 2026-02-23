class Laptop {
  #numberofcpuFans = 1;
  _hardDiskType = "HDD"; // protected property, meant to be internal
  constructor(brand) {
    this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() {
    return this._hardDiskType;
  } // public method to access protected property
  getCPUFans() {
    return this.#numberofcpuFans;
  }
}

class chromebook extends Laptop {
  getSpecs() {
    this.#numberofCPUFans = 2;
  }
}

let macbook = new Laptop("Apple");

console.log(macbook.getHDiskType());
console.log(macbook.getHDiskType());
