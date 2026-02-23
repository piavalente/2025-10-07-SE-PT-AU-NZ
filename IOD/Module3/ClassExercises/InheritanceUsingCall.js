function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9; // 10% off
}

function Food(name, price) {
  Product.call(this, name, price); // inherits from Product with custom context
  this.category = "food";
}

function Electronics(name, price) {
  //no need to define name and price because we can inherit it
  Product.call(this, name, price);
  this.toaster = true;
}

const cheese = new Food("cheese", 5);
console.log(
  `${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`,
);

const toaster1 = new Electronics("New Toaster, 50"); //object of electronice

console.log(
  `${toaster1.name} is a ${toaster1.toaster} and costs ${toaster1.prince} (${toaster1.salePrice}) on sale`,
);
