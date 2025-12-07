## 🏗️ Architecture

```
src/
├── assets/             # Images, fonts, et ressources statiques
├── components/         # Composants réutilisables
│   ├── btn/            # Composants boutons (DarkModeToggle, etc.)
│   ├── input/          # Composants d'entrée (SymptomsSelector, etc.)
│   ├── sections/       # Sections de page (Hero, etc.)
│   └── tag/            # Composants tags et badges (SymptomTag, ListSymptomTag)
├── context/            # Contextes React (ThemeContext)
├── data/               # Données statiques (db.json, symptomList.json, synonymsSymptomList.json)
├── hooks/              # Hooks personnalisés (useDarkMode, useLocalStorage, useMediaQuery, useSymptomTags)
└── layout/             # Layout et navigation (Header, Footer)
    └── components/     # Composants spécifiques au layout (LogoTradimedika)
```
