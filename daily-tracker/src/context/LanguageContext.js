/**
 * @path    : src/context
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the language context provider
 * @version : 1.0.0 - 2025-03-02
 */

import React, { createContext, useState, useEffect } from "react";
import languageJSON from "../assets/language.json";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  // Create the language context, default language is Chinese
  const [language, setLanguage] = useState("zh");
  const [translations, setTranslations] = useState(languageJSON[language]);

  // Listen to the language change
  useEffect(() => {
    setTranslations(
      language === "zh" ? languageJSON["zh"] : languageJSON["en"]
    );
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
