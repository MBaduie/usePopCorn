import { useEffect, useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import NavBar from "./components/NavBar/NavBar";
import WatchedBox from "./components/WatchedBox/WatchedBox";
import Main from "./UI/Main/Main";
import MainLayout from "./layout/MainLayout/MainLayout";
import NumResults from "./components/NumResults/NumResults";
import Search from "./UI/Search/Search";
import Logo from "./UI/Logo/Logo";
import Loader from "./UI/Loader/Loader";
import Error from "./UI/Error/Error";
import MoviesList from "./components/MoviesList/MoviesList";
import Box from "./components/Box/Box";
// import MovieSummary from "./components/MovieSummary/MovieSummary";
import MovieDetails from "./components/MovieDetails/MovieDetails";

// import axios from "axios";

const API_KEY = "65a965f";

// const tempQuery = "saw";

// Example query, can be changed

export default function App() {
  const [movies, setMovies] = useState(tempMovieData || []);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // --------------Event listeners-----------------
  const handleSelectedMovie = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };
  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatchedMovie = (movie) => {
    if (watched.some((m) => m.imdbID === movie.imdbID)) return;
    setWatched((watched) => [...watched, movie]);
  };

  // -------------- Get Movies UseEffects-----------------
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        if (!res.ok) throw new Error("something went wrong with data fetching");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (Error) {
        setErrorMessage(Error.message);
      } finally {
        setIsLoading(false);
        setErrorMessage("");
      }
    };
    if (!query || query.length < 3) {
      setMovies([]);
      setErrorMessage("");
      return;
    }
    fetchMovies();
  }, [query]);

  return (
    <MainLayout>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && !errorMessage && <Loader />}
          {!isLoading && !errorMessage && (
            <MoviesList
              movies={movies}
              handleSelectedMovie={handleSelectedMovie}
            />
          )}
          {errorMessage && !isLoading && <Error errorMessage={errorMessage} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handleCloseMovie={handleCloseMovie}
              handleAddWatchedMovie={handleAddWatchedMovie}
            />
          ) : (
            <>
              <WatchedBox watched={watched} />
              {/* <MovieSummary /> */}
            </>
          )}
        </Box>
      </Main>
    </MainLayout>
  );
}
