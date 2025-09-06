import './CatalogPage.scss';
import {type Movie} from "../ data/movies.ts";
import { useState, useEffect } from "react";
import {MovieCard} from "../components/MovieCard.tsx";


type CatalogPageProps = {
  movies: Movie[];
  favorites: string[];
  searchQuery: string;
  onToggleFavorite: (id: string) => void;
}

export default function CatalogPage({ searchQuery, onToggleFavorite, favorites, movies }: CatalogPageProps ) {
  const [displayedMovies, setDisplayedMovies] = useState(movies);




  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedMovies(filtered);
  }, [searchQuery, movies]);

  return (
    <div className='cinema-grid-page'>
      {displayedMovies.map(movie => (
        <MovieCard
        key={movie.id}
        movie={movie}
        isFavorite={favorites.includes(movie.id)}
        onToggleFavorite={()=>onToggleFavorite(movie.id)}>
        </MovieCard>
      ))}
    </div>
  );
}
