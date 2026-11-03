import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content } from "@/content/site";

const STORAGE_KEY = "nexus-language";
const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => {
        window.localStorage.setItem(STORAGE_KEY, next);
        setLang(next);
      },
      site: content[lang],
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used inside LangProvider");
  return context;
}

export function useSite() {
  return useLang().site;
}