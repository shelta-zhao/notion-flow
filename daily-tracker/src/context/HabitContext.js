import React, { createContext, useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext.js";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  // Select the language from the context & Set the initial habits
  const { language } = useContext(LanguageContext);
  const initialHabits = language === "zh" ? ["习惯一"] : ["Habit One"];
  const [habits, setHabits] = useState(initialHabits);
  const [selectedHabit, setSelectedHabit] = useState(habits[0]);

  const addHabit = () => {
    const newHabit =
      language === "zh"
        ? `习惯${habits.length + 1}`
        : `Habit ${habits.length + 1}`;
    setHabits([...habits, newHabit]);
  };

  return (
    <HabitContext.Provider
      value={{ habits, selectedHabit, setSelectedHabit, addHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
};
