import "../css/MovieCard.css";
// import PropTypes from "prop-types";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCards({ Movie }) {
  const { addToFavorites, removeFromFavorites, isFavorites } =
    useMovieContext();
  const favorite = isFavorites(Movie.id);

  function handleonfavclick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(Movie.id);
    else addToFavorites(Movie);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
          //   `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          alt={Movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={handleonfavclick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{Movie.title}</h3>
        <p>{Movie.release_date}</p>
      </div>
    </div>
  );
}
export default MovieCards;
