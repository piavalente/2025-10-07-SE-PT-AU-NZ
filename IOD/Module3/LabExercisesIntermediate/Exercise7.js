/* Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks. */

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

/* a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id. */

function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId); //find book by id
    return book ? book.title : "Book not found" //return this if not found
}

console.log(getBookTitle(1));
console.log(getBookTitle(3));
console.log(getBookTitle(5));

/* b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950. */

function getOldBooks() {
    const oldBooks = books.filter(book => book.year < 1950); 
    return oldBooks; 
}

console.log(getOldBooks());

/* c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’ */

function addGenre() {
    const newGenre = books.map(book => {
        return {...book, genre: "Classic"};
    })
    return newGenre;
}

const updatedBooks = addGenre();

console.log(updatedBooks)
//console.log(books) will only print the original one

/* d) (Extension) Write a function getTitles(authorInitial) that uses map and
filter together to return an array of book titles for books written by authors whose
names start with authorInitial. */

function getTitles(authorInitial) {
    const bookTitles = books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book=> book.title)

    return bookTitles;
}

console.log(getTitles('A'))
console.log(getTitles('F'))
console.log(getTitles('G'))

/* (Extension) Write a function latestBook() that uses find and forEach to get the
book with the most recent publication date. */

//find most recent publication 
function latestBook() {
    const maxYear = Math.max(...books.map(book => book.year)) //Math.max is built in function
    const latest = books.find(book => book.year === maxYear);

    return latest;
}

console.log(latestBook());

//forEach most recent publication
function newestBook() {
    let newest = books[0];
    books.forEach(function(book) {
        if (book.year > newest.year) {
            newest = book;
        }
    })

    return newest;
}

console.log(newestBook());