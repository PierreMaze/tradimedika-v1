// tradimedika-v1/src/pages/RemedyResult.jsx

import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterRemedyResult from "../components/filter/FilterRemedyResult";
import RemedyResultList from "../components/remedy/RemedyResultList";
import db from "../data/db.json";
import { findMatchingRemedies } from "../utils/remedyMatcher";

/**
 * RemedyResult Page - Affiche les remèdes correspondant aux symptômes sélectionnés
 *
 * Fonctionnalités:
 * - Récupère les symptômes depuis Hero via useLocation (React Router state)
 * - Calcule les remèdes matchés avec findMatchingRemedies()
 * - Permet le filtrage par tags/symptômes via FilterRemedyResult
 * - Affiche la liste des remèdes via RemedyResultList (grille responsive)
 * - Affiche un message d'état vide si aucun remède trouvé
 *
 * Layout:
 * - Container, padding, et BreadCrumb gérés par LayoutRemedyResult
 * - Position des filtres: entre titre et liste de résultats
 */

function RemedyResult() {
  const location = useLocation();

  // useMemo pour éviter recalcul des symptômes à chaque render
  const selectedSymptoms = useMemo(
    () => location.state?.symptoms || [],
    [location.state?.symptoms],
  );

  // Calcul des remèdes matchés avec useMemo pour optimisation
  const matchedRemedies = useMemo(
    () => findMatchingRemedies(selectedSymptoms, db),
    [selectedSymptoms],
  );

  // État uniquement pour les remèdes filtrés par les tags
  const [filteredRemedies, setFilteredRemedies] = useState(matchedRemedies);

  return (
    <div className="text-dark dark:text-light flex flex-col items-center text-center transition duration-300 ease-in-out">
      {/* Titre principal */}
      <h1 className="mb-6 text-3xl font-bold lg:text-4xl">
        Résultats des Remèdes
      </h1>

      {/* Sous-titre avec symptômes sélectionnés */}
      {selectedSymptoms.length > 0 && (
        <p className="mb-6 text-base text-neutral-600 lg:text-lg dark:text-neutral-400">
          Remèdes naturels pour:{" "}
          <span className="font-semibold text-emerald-600 dark:text-emerald-500">
            {selectedSymptoms.join(", ")}
          </span>
        </p>
      )}

      {/* Filtres par tags (seulement si des remèdes ont été trouvés) */}
      {matchedRemedies.length > 0 && (
        <FilterRemedyResult
          key={selectedSymptoms.join("-")}
          matchedRemedies={matchedRemedies}
          onFilterChange={setFilteredRemedies}
        />
      )}

      {/* Compteur de résultats (seulement si des remèdes sont affichés après filtrage) */}
      {filteredRemedies.length > 0 && matchedRemedies.length > 0 && (
        <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-400">
          <span className="font-bold text-emerald-600 dark:text-emerald-500">
            {filteredRemedies.length}
          </span>{" "}
          remède{filteredRemedies.length > 1 ? "s" : ""} trouvé
          {filteredRemedies.length > 1 ? "s" : ""}
        </p>
      )}

      {/* Liste des remèdes ou état vide */}
      <RemedyResultList
        remedies={filteredRemedies}
        hasMatchingRemedies={matchedRemedies.length > 0}
      />
    </div>
  );
}

export default RemedyResult;
