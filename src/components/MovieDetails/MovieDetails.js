import axios from "axios";
import { useEffect, useState } from "react";
import SelectedMovie from "../selectedMovie/SelectedMovie";
import Loader from "../../UI/Loader/Loader";

const API_KEY = "65a965f";
const MovieDetails = ({
  selectedId,
  handleCloseMovie,
  handleAddWatchedMovie,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ")[0]),
      imdbRating: Number(imdbRating),
      plot,
      released,
      actors,
      director,
      genre,
    };
    handleAddWatchedMovie(newWatchedMovie);
    handleCloseMovie();
  }

  // -------- Get Movie Details UseEffects-------------
  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      await axios
        .get("https://www.omdbapi.com/", {
          params: {
            apikey: API_KEY,
            i: selectedId,
          },
        })
        .then((res) => setMovie(res.data));
      setIsLoading(false);
    };
    getMovieDetails(selectedId);
  }, [selectedId]);

  return (
    <div className="details">
      <button className="btn-back" onClick={handleCloseMovie}>
        {" "}
        &larr;
      </button>
      {isLoading ? (
        <Loader />
      ) : (
        <SelectedMovie
          movie={movie}
          selectedId={selectedId}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default MovieDetails;
