import { useContext } from 'react';
import { ThemeContext } from '../app/contexts/ThemeContext.js';

function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

export default useTheme;
