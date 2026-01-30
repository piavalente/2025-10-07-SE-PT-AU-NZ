import "../App.css";
import Movie from "./Movie";
import AddMovieForm from "./AddMovieForm";
import { useState } from "react";

function MovieList() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  function handleReverseList() {
    setCurrentMovies([...currentMovies].reverse());
  }

  function handleAddMovie({
        title, 
        year, 
        synopsis = "Default Synopsis"
    })
  {
    let updatedMovies = [...currentMovies]
    updatedMovies.push({
        id:updatedMovies.length + 1, 
        title: title, 
        year: year,
        synopsis: synopsis,
    });
    setCurrentMovies(updatedMovies);

  }
  

  return (
    <>
      <div className="MovieList componentBox">
        <ul>
          {currentMovies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              synopsis={movie.synopsis}
            />
          ))}
        </ul>

        <button onClick={handleReverseList}>Reverse List</button>
      </div>

      <AddMovieForm onAddMovie={handleAddMovie}></AddMovieForm>
    </>
  );
}

export default MovieList;
