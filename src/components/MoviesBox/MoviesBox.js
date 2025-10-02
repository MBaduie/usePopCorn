import { useState } from "react";
import Button from "../../UI/Button/Button";
import MoviesList from "../MoviesList/MoviesList";

const MoviesBox = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesBox;
