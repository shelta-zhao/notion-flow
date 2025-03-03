/**
 * @path    : src/services/habit-api
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the class of HabitManager
 * @version : 1.0.0 - 2025-02-28
 */

import HabitStore from "./HabitStore.js";

class HabitManager {
  constructor() {
    this.count = 0;
    this.habits = {};
    this.addHabit(); // create a default habit
  }

  addHabit(name = "default", type = "count", unit = "times") {
    try {
      if (!this.habits[name]) {
        const year = new Date().getFullYear();
        this.habits[name] = new HabitStore(name, unit, type);
        this.habits[name].init(year);
        this.count++;
      } else {
        throw new Error("The habit already exists.");
      }
    } catch (error) {
      console.error("Error adding habit:", error.message);
    }
  }

  saveOneHabitData(name, date, value) {
    try {
      if (this.habits[name]) {
        this.habits[name].saveOneData(date, value);
      } else {
        throw new Error("The habit does not exist.");
      }
    } catch (err) {
      console.error("Unable to save to the habit :", name);
    }
  }

  getOneHabitData(name, date) {
    try {
      if (this.habits[name]) {
        return this.habits[name].getOneData(date);
      } else {
        throw new Error("The habit does not exist.");
      }
    } catch (err) {
      console.error("Unable to get from the habit :", name);
    }
  }

  getHabitYearData(name, year) {
    try {
      if (this.habits[name]) {
        return this.habits[name].getYearData(year);
      } else {
        throw new Error("The habit does not exist.");
      }
    } catch (err) {
      console.error("Unable to get from the habit :", name);
    }
  }

  getHabitLast365Days(name) {
    try {
      if (this.habits[name]) {
        return this.habits[name].getLast365Days();
      } else {
        throw new Error("The habit does not exist.");
      }
    } catch (err) {
      console.error("Unable to get from the habit :", name);
    }
  }

  getHabitList() {
    return Object.keys(this.habits);
  }
}

export default HabitManager;
