import {useContext} from "react";
import {movies} from "../ data/movies.ts";
import {FavoritesContext} from "../contexts/FavoritesContext.tsx";
import {ThemeContext} from "../contexts/ThemeContext";
import './SettingsPage.scss'


export function SettingsPage() {

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("SettingsPage must be used within a ThemeProvider");
  }

  const { theme, setTheme } = themeContext;

  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("MoviePage must be used within a FavoritesProvider");
  }

  const { ids } = favoritesContext;

  return (
    <div className='settings-page-container'>
      <h1 className="settings-page-title">Настройки</h1>
      <p className='settings-page-description'>управление темой и избранным</p>

      <div className='settings-page-theme-container'>
        <h2 className='settings-page-theme-title'>Тема</h2>
        <p className='settings-page-theme-description'>Выберите внешний вид приложения</p>
        <div className="theme-buttons-container">
          <button
            className={theme === 'light' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => setTheme('light')}
          >
            light
          </button>

          <button
            className={theme === 'dark' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => setTheme('dark')}
          >
            dark
          </button>

          <button
            className={theme === 'system' ? 'theme-btn active' : 'theme-btn'}
            onClick={() => setTheme('system')}
          >
            system
          </button>
        </div>
      </div>

      <div className='settings-page-favorites-container'>
        <h2 className='settings-page-favorites-title'>Избранное</h2>
        <span className='settings-page-favorites-info'>{ids.length} из {movies.length} фильмов</span>
      </div>
    </div>
  )
}