import React, { createContext, useState, useEffect } from "react";
import langZh from "../assets/lang_zh.json";
import langEn from "../assets/lang_en.json";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("zh");
  const [translations, setTranslations] = useState(langZh);

  useEffect(() => {
    setTranslations(language === "zh" ? langZh : langEn);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
