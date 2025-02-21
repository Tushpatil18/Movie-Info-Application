import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCards from "../Components/MovieCards";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCards Movie={movie} key={movie.id}></MovieCards>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>This Is Favorites</h2>
      <p>Your Favorite movies will be displayed here..</p>
    </div>
  );
}
export default Favorites;
