import { movies } from "../ data/movies.ts";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";

type FavoritesPageProps = {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function FavoritesPage({ favorites, onToggleFavorite } : FavoritesPageProps) {
  const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));

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
          onToggleFavorite={() => onToggleFavorite(movie.id)}
        />
      ))}
    </section>
  );
}
