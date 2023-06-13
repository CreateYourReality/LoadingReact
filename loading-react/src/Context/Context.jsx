import { createContext } from "react";

// Wir erstellen ein Context und exportieren ihn damit er überall verfügbar ist, wenn wir ihn importieren
export const ThemeContext = createContext();
export const loadingContext = createContext();