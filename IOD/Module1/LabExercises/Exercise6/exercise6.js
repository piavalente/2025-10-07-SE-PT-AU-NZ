let book = {
    "title" : "Nee Naw The Little Fire Engine",
    "description" : "Book about fire enginges",
    "author" : "Deano Yipadee",
    "numberOfPages" : 24
}

// print individually
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.numberOfPages)

//update descriptiopn of book
book.description = "Sing a long book for preschoolers";
console.log(book.description)

//print whole book
//print after updating book description to see update
console.log(book)

//extension
let moreBooks = [ //use an array. use brackets for array
{
    "title" : "Brown Bear, Brown Bear, What Do You See",
    "description" : "A repetitive and rhythmic picture book that introduces colors and animals to young children.",
    "author" : "Bill Martin Jr.",
    "numberOfPages" : 28
},

{
    "title" : "The Very Hungry Caterpillar",
    "description" : "Follows a caterpillar eating his way through different foods before transforming into a butterfly.",
    "author" : "Eric Carle",
    "numberOfPages" : 32
},

{
    "title" : "Guess How Much I Love You",
    "description" : "A heartwarming story of Little Nutbrown Hare and Big Nutbrown Hare expressing",
    "author" : "Sam MacBratney",
    "numberOfPages" : 32
},

{
    "title" : "Hairy Maclary",
    "description" : "The adventures of Hairy Maclary, a small scruffy dog, as he encounters other animals in his neighborhood.",
    "author" : "Lynley Dodd",
    "numberOfPages" : 32
},

{
    "title" : "The Gruffalo",
    "description" : "A clever mouse walks through the woods and invents tales of the Gruffalo.",
    "author" : "Julia Donaldson",
    "numberOfPages" : 32
},
]
console.log(moreBooks)


moreBooks.forEach(book => {
    console.log(book.title);
    console.log(book.author);
});