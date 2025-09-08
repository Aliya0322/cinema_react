import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import './MainLayout.scss';
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { type Movie, movies } from "../../ data/movies";

const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesData] = useState<Movie[]>(movies);
  const favoritesContext = useContext(FavoritesContext);
  const navigate = useNavigate();

  if (!favoritesContext) {
    throw new Error("MainLayout must be used within a FavoritesProvider");
  }

  const { ids } = favoritesContext;

  const handleNavigateToFavorites = () => {
    navigate('/favorites');
  }

  const handleNavigateToSettings = () => {
    navigate('/settings');
  }

  return (
    <div className="main-layout">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateToFavorites={handleNavigateToFavorites}
        onNavigateToSettings={handleNavigateToSettings}
        favoritesCount={ids.length}
      />
      <main className="main-layout__content">
        <Outlet context={{ searchQuery, moviesData }} />
      </main>
    </div>
  );
};

export default MainLayout;