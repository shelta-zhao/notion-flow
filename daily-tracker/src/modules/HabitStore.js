/**
 * @file    : src/modules/HabitStore.js
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the class of HabitStore
 * @version : 1.0.0 - 2025-02-28
 */

import GridCell from "./GridCell.js";
import { isLeapYear } from "../utils/utils.js";

class HabitStore {
  constructor(name = "default", type = "count", unit = "times") {
    this.name = name;
    this.type = type; // 'count' or 'value or 'check''
    this.unit = unit;
    this.data = {};
  }

  init(year) {
    // Initialize the data of the year
    this.data[year] = {};

    // Initialize the gird cell of the year
    const firstDayOfYear = new Date(Date.UTC(year, 0, 1));
    const dayOfYear = isLeapYear(year) ? 366 : 365;

    // Initialize the grid cell for each day of the year
    for (let day = 0; day < dayOfYear; day++) {
      const date = new Date(firstDayOfYear);
      date.setDate(firstDayOfYear.getDate() + day);
      const dateString = date.toISOString().split("T")[0];
      this.data[year][dateString] = new GridCell();
    }
  }

  saveOneData(date, value) {
    // Check if the year is initialized
    const year = new Date(date).getFullYear();
    if (!this.data[year]) {
      this.init(year);
    }

    // Save the data
    const dateString = date.toISOString().split("T")[0];
    this.data[year][dateString].setValue(value);
  }

  getOneData(date) {
    const year = new Date(date).getFullYear();
    if (!this.data[year]) {
      this.init(year);
    }
    const dateString = date.toISOString().split("T")[0];
    return this.data[year][dateString];
  }

  getLast365Days() {
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setDate(today.getDate() - 365);
    const datalen = 365 + oneYearAgo.getDay();
    let result = {};

    // Loop from the day one year ago
    for (let day = datalen; day >= 0; day--) {
      const date = new Date(today);
      date.setDate(today.getDate() - day);
      result[date.toISOString().split("T")[0]] = this.getOneData(date);
    }

    return result;
  }

  getYearData(year) {
    // Get the data of a certain year
    try {
      return this.data[year];
    } catch (err) {
      console.error("Unable to get the data of the year", year);
      return null;
    }
  }
}

export default HabitStore;
