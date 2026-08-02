import { ThemeContext } from '../contexts/ThemeContext.js';
import { useState, useEffect } from 'react';
import { saveTheme, loadTheme } from '../../services/themeStorage.js';

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(loadTheme() ?? 'dark');
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    saveTheme(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
