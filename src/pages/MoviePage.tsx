import { Link, useParams } from "react-router-dom";
import type { Movie } from "../ data/movies.ts";
import './MoviePage.scss'
import { FavoritesContext } from "../contexts/FavoritesContext.tsx";
import { useContext } from "react";
import { useOutletContext } from "react-router-dom";

// Интерфейс для контекста из MainLayout
interface OutletContext {
  moviesData: Movie[];
}

export function MoviePage() {
  const { id } = useParams<{ id: string }>();

  // Получаем moviesData из MainLayout через Outlet context
  const outletContext = useOutletContext();
  const { moviesData } = outletContext as OutletContext;

  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("MoviePage must be used within a FavoritesProvider");
  }

  // Проверка, что контекст содержит нужные данные
  if (!outletContext || typeof outletContext !== 'object' || !('moviesData' in outletContext)) {
    throw new Error("MoviePage must be used within MainLayout");
  }

  const { ids, toggle } = favoritesContext;

  const movie = moviesData.find(m => m.id === id);

  if (!movie) {
    return (
      <div className="movie-not-found">
        <h2>Фильм не найден</h2>
        <Link to="/">
          <button className="movie-page-back-btn">
            Вернуться к каталогу
          </button>
        </Link>
      </div>
    );
  }

  const isFavorite = ids.includes(movie.id);

  return (
    <div className='movie-page-card'>
      <img className="movie-page-poster-img" src="#" alt={movie.title}/>
      <div className="movie-page-poster-details">
        <h1 className="movie-page-title">{movie.title}</h1>
        <h3 className="movie-page-year">{movie.year}</h3>
        <p className="movie-page-description">{movie.description}</p>
        <button
          className={`movie-page-favorite-btn ${isFavorite ? 'movie-page-favorite-btn--remove' : 'movie-page-favorite-btn--add'}`}
          onClick={() => toggle(movie.id)}
        >
          {isFavorite ? "Убрать из избранного" : "В избранное"}
        </button>
        <Link to="/">
          <button className="movie-page-back-btn">
            Вернуться к каталогу
          </button>
        </Link>
      </div>
    </div>
  );
}
