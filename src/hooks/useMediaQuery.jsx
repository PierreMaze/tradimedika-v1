// hooks/useMediaQuery.js
import { useEffect, useState } from "react";

/**
 * Hook pour détecter les media queries CSS
 * Compatible SSR (ne plante pas côté serveur)
 *
 * @param {string} query - Media query CSS (ex: '(prefers-color-scheme: dark)')
 * @returns {boolean} - true si la media query correspond
 */
export function useMediaQuery(query) {
  // Initialisation safe pour SSR
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    // Protection SSR
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // Handler pour les changements
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Initialise la valeur
    setMatches(mediaQuery.matches);

    // Écoute les changements
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
