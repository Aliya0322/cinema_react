
# Кинополка — избранные фильмы

React-приложение для управления списком избранных фильмов с поддержкой темной/светлой темы и поиском по каталогу.

##  Функциональность

- **Каталог фильмов** - просмотр списка фильмов с поиском по названию
- **Страница фильма** - детальная информация о фильме
- **Избранное** - персональная коллекция фильмов
- **Настройки** - управление темой приложения
- **Адаптивный дизайн** - поддержка экранов от 360px

##  Технологии

- **React 19** с TypeScript
- **React Router** для навигации
- **Context API** для управления состоянием
- **Локальное хранилище** для сохранения данных

##  Структура проекта

```
├── src
│   ├──  data
│   │   └── movies.ts
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Header.scss
│   │   ├── Header.tsx
│   │   ├── MovieCard.scss
│   │   ├── MovieCard.tsx
│   │   └── layouts
│   ├── contexts
│   │   ├── FavoritesContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks
│   │   └── usePersistentState.ts
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   ├── CatalogPage.scss
│   │   ├── CatalogPage.tsx
│   │   ├── FavoritesPage.scss
│   │   ├── FavoritesPage.tsx
│   │   ├── MoviePage.scss
│   │   ├── MoviePage.tsx
│   │   ├── NotFoundPage.scss
│   │   ├── NotFoundPage.tsx
│   │   ├── SettingsPage.scss
│   │   └── SettingsPage.tsx
│   ├── router
│   │   └── AppRouter.tsx
│   ├── styles
│   │   └── _variables.scss
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🎬 Типы данных

```typescript
type Movie = {
  id: string;
  title: string;
  year: number;
  description: string;
};

type Theme = 'light' | 'dark' | 'system';
```

##  Сценарии использования

1. **Просмотр каталога** - Откройте главную страницу для просмотра фильмов
2. **Поиск фильмов** - Используйте поле поиска для фильтрации по названию
3. **Добавление в избранное** - Нажмите ♡ на карточке фильма
4. **Просмотр избранного** - Перейдите на страницу /favorites
5. **Смена темы** - Измените тему в настройках (/settings)

##  Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в development режиме
npm start

# Сборка для production
npm run build
```

##  Особенности

- Сохранение состояния при перезагрузке страницы
- Адаптивный интерфейс для мобильных устройств
- Поиск с мгновенной фильтрацией
- Бейдж с количеством избранных фильмов в шапке
- Поддержка системной темы (auto-detection)

##  Acceptance тесты

Приложение проходит следующие сценарии:
- Добавление/удаление фильмов из избранного
- Сохранение состояния между сессиями
- Переключение тем оформления
- Корректная работа поиска
- Навигация между страницами

## Лицензия
Этот проект распространяется под лицензией MIT. Подробную информацию можно найти в файле LICENSE.