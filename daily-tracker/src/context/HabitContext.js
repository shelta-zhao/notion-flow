/**
 * @path    : src/context
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the habit context provider
 * @version : 1.0.0 - 2025-03-03
 */

import React, { createContext, useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext.js";

export const HabitContext = createContext();

export const HabitProvider = ({ children, habitManager }) => {
  // Select the language from the context & Set the initial habits
  const { language } = useContext(LanguageContext);

  // Initialize the habits from input data
  const habitList = habitManager.getHabitList();
  const [habits, setHabits] = useState(habitList);
  const [selectedHabit, setSelectedHabit] = useState(habits[0]);

  // Handle to get the year data of a habit
  const getYearData = (habit, year) => {
    return habitManager.getYearData(habit, year);
  };

  // Handle to get the last 365 days data of a habit
  const getLast365Days = (habit) => {
    return habitManager.getLast365Days(habit);
  };

  // Handle to add a new habit
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
