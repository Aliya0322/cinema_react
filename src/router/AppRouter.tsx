// AppRouter.tsx
import { Route, Routes } from "react-router-dom";
import CatalogPage from "../pages/CatalogPage";
import { MoviePage } from "../pages/MoviePage.tsx";
import { FavoritesPage } from "../pages/FavoritesPage.tsx";
import { SettingsPage } from "../pages/SettingsPage.tsx";
import { NotFoundPage } from "../pages/NotFoundPage.tsx";
import MainLayout from "../components/layouts/MainLayout.tsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<CatalogPage />}
        />
        <Route
          path="/movie/:id"
          element={<MoviePage />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="/settings"
          element={<SettingsPage />}
        />
        <Route
          path="/notfound"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}
