const SelectedMovie = ({ movie, onAddWatchedMovie }) => {
  const {
    Title,
    Year,
    Poster,
    Runtime,
    imdbRating,
    Plot,
    Released,
    Actors,
    Director,
    Genre,
  } = movie;

  return (
    <>
      <header>
        <img src={Poster} alt={`Poster 0f ${movie} movie`} />
        <div className="details-overview">
          <h2>{Title}</h2>
          <p>
            {Released} &bull; {Runtime} &bull; {Genre}
          </p>
          <p>{Genre}</p>
          <p>
            <span>⭐</span> {imdbRating} IMDb rating
          </p>
        </div>
      </header>
      <div>
        <button className="btn-add" onClick={() => movie}>
          + Add to list
        </button>
      </div>
      <section>
        <p>
          <em>{Plot}</em>
        </p>
        <p>Starring {Actors}</p>
        <p>{`Published at ${Year} `}</p>
        <h3>Directed by {Director}</h3>
      </section>
    </>
  );
};

export default SelectedMovie;
