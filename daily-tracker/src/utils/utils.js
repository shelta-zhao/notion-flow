/**
 * @file    : src/modules/GridCell.js
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the utility functions
 * @version : 1.0.0 - 2025-02-28
 */

/**
 * Check if a year is a leap year
 * @param {number} year - The year to check
 * @returns {boolean} - Return true if it is a leap year, otherwise return false
 */
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get the day of the week of the first day of the year
 * @param {number} year - The year to get
 * @returns {number} - Return the day of the week of the first day of the year
 */
export function getFirstDayOfYear(year) {
  const date = new Date(year, 0, 1);
  return date.getDay();
}
