import BookList from "./BookList";
import BookFilter from "./BooksFilter";

function Books (props) {

    const books = ["Harry Potter", "Lord of the rings", "Spiderman" ]; //ADD common datas here at the PARENT

    return (
        <>
            <div>
                <h1>Books</h1>
            </div> 
            <div>
                <h2>Here are the list of books</h2>
                <BookList books = {books}></BookList> {/*pass it here*/}
            </div>
            <div>
                <h2>Here are the filtered list of books</h2>
                <BookFilter books = {books}></BookFilter>
            </div>
        </>
    );
}

export default Books;
