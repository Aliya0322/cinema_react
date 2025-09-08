import {Link} from "react-router-dom";
import './MovieCard.scss'

type MovieCardProps = {
  movie: {
    id: string;
    title: string;
    year: number;
  };

  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function MovieCard({movie, isFavorite, onToggleFavorite}: MovieCardProps) {
  return (
    <div className='cinema-card'>
      <Link to={`/movie/${movie.id}`}>
        <img className="cinema-poster-img" src="#" alt={movie.title} />
        <h1 className="cinema-title">{movie.title}</h1>
      </Link>
      <h3 className='cinema-year'>{movie.year}</h3>
      <button
        className={`favorite-btn ${isFavorite ? 'favorite-btn--remove' : 'favorite-btn--add'}`}
        onClick={() => onToggleFavorite(movie.id)}
      >
        {isFavorite ? "Убрать из избранного" : "В избранное"}
        </button>
    </div>
  )
}