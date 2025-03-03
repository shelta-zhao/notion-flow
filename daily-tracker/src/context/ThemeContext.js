/**
 * @path    : src/context
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the theme context provider
 * @version : 1.0.0 - 2025-03-03
 */

import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Read the theme from localStorage & the default theme is light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Set the theme to the document's root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // 记住用户的选择
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
