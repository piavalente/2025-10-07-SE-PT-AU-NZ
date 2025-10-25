//Array of 5 elements
let regions = ["Auckland", "Waikato", "Gisborne", "Taranaki", "Wellington"];
console.log(regions[0]);
console.log(regions[1]);
console.log(regions[2]);
console.log(regions[3]);
console.log(regions[4]);

//Replace the value of the element at position 1 and 4
regions[1] = "Tasman";
regions[4] = "Nelson";
console.log(regions); 

//Add an element at the beginning of the array
regions.unshift("Northland");
console.log(regions);

//Remove the element at the end of the array
let lastregions = regions.pop(); //remove Wellington
console.log(lastregions);
console.log(regions);

