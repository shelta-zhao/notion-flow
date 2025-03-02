import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext.js";

const SettingsPanel = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  return (
    <div>
      <h3>{translations.settings}</h3>
      <label>
        {translations.language}:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </label>
    </div>
  );
};

export default SettingsPanel;
