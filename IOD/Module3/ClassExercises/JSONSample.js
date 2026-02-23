const student = {
  name: "Sita",
  age: 28,
  courses: ["HTML", "CSS", "JS"],
  occupation: null,
};
console.log(student);

console.log(JSON.stringify(student));
//{"name":"Sita","age":28,"courses":["HTML","CSS","JS"],"occupation":null}

const book = {
  title: "Gone With The Wind",
  printTitle() {
    // ignored
    console.log(this.title);
  },
  releaseDate: undefined, // ignored
};
console.log(JSON.stringify(book)); // {"title":"Gone With The Wind"}
