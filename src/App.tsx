import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}