import './CatalogPage.scss';
import { type Movie } from "../ data/movies.ts";
import { useState, useEffect, useContext } from "react";
import { MovieCard } from "../components/MovieCard.tsx";
import { FavoritesContext } from "../contexts/FavoritesContext.tsx";
import { useOutletContext } from "react-router-dom";


interface OutletContext {
  searchQuery: string;
  moviesData: Movie[];
}

export default function CatalogPage() {

  const { searchQuery, moviesData } = useOutletContext<OutletContext>();

  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("CatalogPage must be used within a FavoritesProvider");
  }

  const { ids, toggle } = favoritesContext;
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>(moviesData);

  useEffect(() => {
    const filtered = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedMovies(filtered);
  }, [searchQuery, moviesData]);

  return (
    <div className='cinema-grid-page'>
      {displayedMovies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={ids.includes(movie.id)}
          onToggleFavorite={() => toggle(movie.id)}
        />
      ))}
    </div>
  );
}
