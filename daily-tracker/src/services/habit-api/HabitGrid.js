/**
 * @path    : src/services/habit-api
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the class of HabitGrid
 * @version : 1.0.0 - 2025-02-28
 */

class HabitGrid {
  constructor(value = 0, level = 0) {
    this.value = value;
    this.level = 0;
  }

  // Set the value
  setValue(value) {
    this.value = value;
    this.updateLevel();
  }

  // Get the value
  getValue() {
    return this.value;
  }

  // Set the record level
  updateLevel() {
    switch (true) {
      case this.value >= 1 && this.value < 5:
        this.level = 1;
        break;
      case this.value >= 5 && this.value < 10:
        this.level = 2;
        break;
      case this.value >= 10 && this.value < 15:
        this.level = 3;
        break;
      case this.value >= 15:
        this.level = 4;
        break;
      default:
        this.level = 0;
        break;
    }
  }

  // Get the record level
  getLevel() {
    return this.level;
  }
}

export default HabitGrid;
