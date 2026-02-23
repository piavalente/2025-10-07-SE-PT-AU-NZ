class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  describe() {
    console.log(`${this.name} is a ${this.type}`);
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}
//any animal can inherit from this animal

class Rabbit extends Animal {
  //extends = inherits class animal's method
  hide() {
    // rabbit's own method
    console.log(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call the parent stop
    this.hide();
  }
}
let wildanimal = new Animal("some wild animal");

let whiterabbit = new Rabbit("white rabbit");
whiterabbit.run(50);
whiterabbit.stop();
whiterabbit.hide();
wildanimal.stop();
