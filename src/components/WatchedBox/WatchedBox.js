import { useState } from "react";
import Button from "../../UI/Button/Button";
import MovieSummary from "../MovieSummary/MovieSummary";
import WatchedMoviesList from "../watchedMoviesList/WatchedMoviesList.js";
import Box from "../../UI/Box/Box.js";

const WatchedMovies = ({ watched }) => {
  const [isOpen, setIsOpen] = useState(true);
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <Box>
      <Button isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <>
          <MovieSummary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </Box>
  );
};

export default WatchedMovies;
