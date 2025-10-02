import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";
import { NavBar, MoviesBox, WatchedBox } from "./components";
import Main from "./UI/Main/Main";
import MainLayout from "./layout/MainLayout/MainLayout";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <MainLayout>
      <NavBar movies={movies} />
      <Main>
        <MoviesBox movies={movies} />
        <WatchedBox watched={watched} />
      </Main>
    </MainLayout>
  );
}
