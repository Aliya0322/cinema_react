import { useFavorites } from "../hooks/useFavorites";
import { movies } from "../ data/movies.ts";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";

export function FavoritesPage() {
  const { ids, toggle } = useFavorites();

  // Находим фильмы, которые есть в избранном
  const favoriteMovies = movies.filter(movie => ids.includes(movie.id));

  if (favoriteMovies.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>Пока пусто</h2>
        <Link to="/">В каталог</Link>
      </div>
    );
  }

  return (
    <section className="cinema-grid-page">
      {favoriteMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={true}
          onToggleFavorite={() => toggle(movie.id)}
        />
      ))}
    </section>
  );
}
