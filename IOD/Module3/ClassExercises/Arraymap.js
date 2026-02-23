const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
  { id: 4, title: "Ladies Tee", price: 25.95, category: "Shirts" },
];

let categories = products.map((product) => product.category); //only the categories
// transforms the array and extracts only the categories

let prices = products.map((product) => product.price);
let titles = products.map((product) => product.title);

console.log(categories);
console.log(prices);
console.log(titles);

let raisedPrices = products.map((product) => ({
  ...product,
  price: product.price + 5,
}));

console.log(raisedPrices);
