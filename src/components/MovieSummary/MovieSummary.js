import Ratings from "../Ratings/Ratings";

const MovieSummary = ({
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) => {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <Ratings
        watched={watched}
        avgImdbRating={avgImdbRating}
        avgUserRating={avgUserRating}
        avgRuntime={avgRuntime}
      />
    </div>
  );
};

export default MovieSummary;
