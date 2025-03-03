/**
 * @file    : src/components/SettingsPanel.js
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the settings panel component
 * @version : 1.0.0 - 2025-03-02
 */

import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";
import { ThemeContext } from "../../context/ThemeContext.js";

const SettingsPanel = () => {
  // Get the global language context
  const { language, setLanguage, translations } = useContext(LanguageContext);
  const { theme, setTheme } = useContext(ThemeContext);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Render the settings panel
  return (
    <div>
      <h3>{translations.settings}</h3>

      {/* 语言切换 */}
      <label>
        {translations.language}:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </label>

      {/* 主题切换 */}
      <label>
        {translations.theme}:
        <button onClick={toggleTheme}>
          {theme === "light" ? translations.lightMode : translations.darkMode}
        </button>
      </label>
    </div>
  );
};

export default SettingsPanel;
