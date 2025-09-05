import {Link, useParams} from "react-router-dom";
import type {Movie} from "../ data/movies.ts";
import './MoviePage.scss'


type MoviePageProps = {
  movies: Movie[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function MoviePage({ movies, favorites, onToggleFavorite }: MoviePageProps) {
  const { id } = useParams<{ id: string }>();

  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return <div>Фильм не найден</div>;
  }

  const isFavorite = favorites.includes(movie.id);

  return (
    <div className='movie-page-card'>
      <img className="movie-page-poster-img" src="#" alt={movie.title}/>
      <div className="movie-page-poster-details">
      <h1 className="movie-page-title">{movie.title}</h1>
      <h3 className="movie-page-year">{movie.year}</h3>
      <p className="movie-page-description">{movie.description}</p>
      <button
        className="movie-page-favorite-btn"
        onClick={() => onToggleFavorite(movie.id)}
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
