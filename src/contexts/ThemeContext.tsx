import {createContext, type ReactNode, useState} from "react";

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: {children: ReactNode}) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

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
