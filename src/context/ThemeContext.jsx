// context/ThemeContext.jsx
import { createContext, useContext } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const ThemeContext = createContext(undefined);

/**
 * Provider pour partager le dark mode dans toute l'app
 * Évite les prop drilling et optimise les re-renders
 */
export function ThemeProvider({ children }) {
  const darkMode = useDarkMode();

  return (
    <ThemeContext.Provider value={darkMode}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook pour accéder au dark mode depuis n'importe quel composant
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
