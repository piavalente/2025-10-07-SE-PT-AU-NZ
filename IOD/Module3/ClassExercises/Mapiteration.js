const recipeMap = new Map([
  ["flour", "1 cup"],
  ["milk", "1/2 cup"],
  ["eggs", 2],
  ["butter", "50g"],
]);

const recipeMap2 = new Map();
recipeMap2.set("flour", "1 cup");
recipeMap2.set("milk", "1/2 cup");
recipeMap2.set("eggs", "2");
recipeMap2.set("butter", "50g");

console.log(recipeMap);
console.log(recipeMap2);

for (let ingredient of recipeMap.keys()) {
  console.log(ingredient);
}
for (let quantity of recipeMap.values()) {
  console.log(quantity); // 1 cup, 1/2 cup, 2, 50g
}
for (let item of recipeMap) {
  // same as recipeMap.entries()
  console.log(item); // ['flour', '1 cup'], (and so on)
}
