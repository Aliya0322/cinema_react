import { movies } from "../ data/movies.ts";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";
import './FavoritesPage.scss';
import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext.tsx";

export function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("FavoritesPage must be used within a FavoritesProvider");
  }

  const { ids, toggle } = favoritesContext;


  const favoriteMovies = movies.filter(movie => ids.includes(movie.id));

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
          onToggleFavorite={() => toggle(movie.id)}
        />
      ))}
    </section>
  );
}