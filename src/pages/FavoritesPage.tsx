import { movies } from "../ data/movies.ts";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";
import './FavoritesPage.scss'

type FavoritesPageProps = {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function FavoritesPage({ favorites, onToggleFavorite } : FavoritesPageProps) {
  const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));

  if (favoriteMovies.length === 0) {
    return (
      <div className="favorites-empty">
        <h1 className='favorites-empty-title'>Избранное</h1>
        <h2 className="favorites-empty-warning">Пока пусто</h2>
        <Link to="/">
          <button className="favorite-page-back-btn">
            Вернуться к каталогу
          </button>
        </Link>
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
