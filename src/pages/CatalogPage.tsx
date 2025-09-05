import './CatalogPage.scss';
import { movies } from "../ data/movies.ts";
import { useState, useEffect } from "react";
import {MovieCard} from "../components/MovieCard.tsx";
import { useFavorites } from "../hooks/useFavorites";



export default function CatalogPage({ searchQuery }: { searchQuery: string }) {
  const [displayedMovies, setDisplayedMovies] = useState(movies);
  const { ids, toggle } = useFavorites();



  useEffect(() => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedMovies(filtered);
  }, [searchQuery]);

  return (
    <div className='cinema-grid-page'>
      {displayedMovies.map(movie => (
        <MovieCard
        key={movie.id}
        movie={movie}
        isFavorite={ids.includes(movie.id)}
        onToggleFavorite={toggle}>
        </MovieCard>
      ))}
    </div>
  );
}
