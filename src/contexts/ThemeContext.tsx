import { createContext, type ReactNode, useEffect } from "react";
import { usePersistentState } from "../hooks/usePersistentState";

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: {children: ReactNode}) {
  const [theme, setTheme] = usePersistentState<'light' | 'dark' | 'system'>(
    'theme',
    'light'
  );


  const applyTheme = (currentTheme: 'light' | 'dark' | 'system') => {
    let actualTheme = currentTheme;


    if (currentTheme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      actualTheme = isDark ? 'dark' : 'light';
    }

    document.documentElement.className = `theme-${actualTheme}`;
  };


  useEffect(() => {
    applyTheme(theme);
  }, []);


  useEffect(() => {
    applyTheme(theme);
  }, [theme]);


  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = () => {
        applyTheme('system');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext };
