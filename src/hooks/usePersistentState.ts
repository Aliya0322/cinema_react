import {useEffect, useState} from "react";

export function usePersistentState <T>  (key: string, initialState: T)  {
  const [value, setValue] = useState<T>(() =>{
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}