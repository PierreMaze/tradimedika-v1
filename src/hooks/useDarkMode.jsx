// hooks/useDarkMode.js
import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useMediaQuery } from "./useMediaQuery";

/**
 * Hook personnalisé pour gérer le dark mode
 * - Persiste la préférence utilisateur dans localStorage
 * - Détecte automatiquement la préférence système
 * - Applique la classe 'dark' sur <html>
 * - Évite le FOUC (Flash of Unstyled Content)
 *
 * @returns {Object} { isDarkMode, toggleDarkMode, enableDark, disableDark }
 */
export const useDarkMode = () => {
  // Détecte la préférence système de l'utilisateur
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Récupère/stocke la préférence dans localStorage
  // Si pas de valeur, utilise la préférence système
  const [storedTheme, setStoredTheme] = useLocalStorage(
    "tradimedika-theme",
    null,
  );

  // État interne du dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialisation : priorité à localStorage, sinon préférence système
    if (storedTheme !== null) {
      return storedTheme === "dark";
    }
    return prefersDarkMode;
  });

  // Applique le thème au DOM (classe 'dark' sur <html>)
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  // Met à jour le thème quand la préférence système change
  // (seulement si l'utilisateur n'a pas défini de préférence manuelle)
  useEffect(() => {
    if (storedTheme === null) {
      setIsDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode, storedTheme]);

  // Toggle entre dark et light mode
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      setStoredTheme(newValue ? "dark" : "light");
      return newValue;
    });
  }, [setStoredTheme]);

  // Active explicitement le dark mode
  const enableDark = useCallback(() => {
    setIsDarkMode(true);
    setStoredTheme("dark");
  }, [setStoredTheme]);

  // Désactive explicitement le dark mode
  const disableDark = useCallback(() => {
    setIsDarkMode(false);
    setStoredTheme("light");
  }, [setStoredTheme]);

  return {
    isDarkMode,
    toggleDarkMode,
    enableDark,
    disableDark,
  };
};
