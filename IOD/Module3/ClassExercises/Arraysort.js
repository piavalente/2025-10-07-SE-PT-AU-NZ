const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
  { id: 4, title: "Ladies Tee", price: 25.95, category: "Shirts" },
];

products.sort((product1, product2) => product1.price - product2.price);
console.log(products);

products.sort((product1, product2) => product2.price - product1.price); //reverse for descending order
console.log(products);

products.sort((product1, product2) =>
  product1.title > product2.title ? 1 : -1,
);
console.log(products);
