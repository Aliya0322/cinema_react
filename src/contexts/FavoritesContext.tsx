import { createContext } from "react";
import type { ReactNode } from "react";
import { usePersistentState } from "../hooks/usePersistentState";

export type FavoritesContextType = {
  ids: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  clear: () => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  // Используем твой отличный хук!
  const [favoritesIds, setFavoritesIds] = usePersistentState<string[]>('favorites', []);

  const add = (id: string) => {
    setFavoritesIds(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const remove = (id: string) => {
    setFavoritesIds(prev => prev.filter(itemId => itemId !== id));
  };

  const toggle = (id: string) => {
    setFavoritesIds(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const clear = () => {
    setFavoritesIds([]);
  };

  const value: FavoritesContextType = {
    ids: favoritesIds,
    add,
    remove,
    toggle,
    clear
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext };

