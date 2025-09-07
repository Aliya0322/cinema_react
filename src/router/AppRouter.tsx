import {Route, Routes, useNavigate} from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import { Header } from '../components/Header';
import {useContext, useState} from "react";
import { MoviePage } from "../pages/MoviePage.tsx";
import { type Movie, movies } from "../ data/movies.ts";
import { FavoritesPage } from "../pages/FavoritesPage.tsx";
import {FavoritesContext} from "../contexts/FavoritesContext.tsx";
import {SettingsPage} from "../pages/SettingsPage.tsx";
import {NotFoundPage} from "../pages/NotFoundPage.tsx";

export default function AppRouter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesData] = useState<Movie[]>(movies);
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("AppRouter must be used within a FavoritesProvider");
  }

  const { ids } = favoritesContext;

  const navigate = useNavigate();

  const handleNavigateToFavorites = () => {
    navigate('/favorites');
  }

  const handleNavigateToSettings = () => {
    navigate('/settings');
  }


  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateToFavorites={handleNavigateToFavorites}
        onNavigateToSettings={handleNavigateToSettings}
        favoritesCount={ids.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <CatalogPage
              searchQuery={searchQuery}
              movies={moviesData}
            />
          }
        />
        <Route
          path="/movie/:id"
          element={
            <MoviePage
              movies={moviesData}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage />
          }
        />
        <Route
          path="/settings"
          element={
          <SettingsPage />
          }
        />
        <Route
          path="/notfound"
          element={
          <NotFoundPage />
          }
        />

      </Routes>
    </>
  );
}
