import {Route, Routes, useNavigate} from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import { Header } from '../components/Header';
import { useState } from "react";
import { MoviePage } from "../pages/MoviePage.tsx";
import { type Movie, movies } from "../ data/movies.ts";
import { FavoritesPage } from "../pages/FavoritesPage.tsx";

export default function AppRouter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesData] = useState<Movie[]>(movies);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const navigate = useNavigate();

  const handleNavigateToFavorites = () => {
    navigate('/favorites');
  }


  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateToFavorites={handleNavigateToFavorites}
        favoritesCount={favorites.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <CatalogPage
              searchQuery={searchQuery}
              movies={moviesData}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={
            <MoviePage
              movies={moviesData}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              onToggleFavorite={toggleFavorite}/>
          }
        />
      </Routes>
    </>
  );
}
