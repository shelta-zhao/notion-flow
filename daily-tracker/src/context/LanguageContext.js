/**
 * @file    : src/context/LanguageContext.js
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the gloabl context provider
 * @version : 1.0.0 - 2025-03-02
 */

import React, { createContext, useState, useEffect } from "react";
import langZh from "../assets/lang_zh.json";
import langEn from "../assets/lang_en.json";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  // Create the language context, default language is Chinese
  const [language, setLanguage] = useState("zh");
  const [translations, setTranslations] = useState(langZh);

  // Listen to the language change
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
