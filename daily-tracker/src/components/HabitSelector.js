import React, { useState } from "react";
import "../styles/HabitSelector.scss";

const HabitSelector = ({
  habits,
  selectedHabit,
  onSelectHabit,
  onAddHabit,
}) => {
  return (
    <div className="habit-selector">
      <div className="habit-tabs">
        {habits.map((habit, index) => (
          <div
            key={index}
            className={`habit-tab ${selectedHabit === habit ? "active" : ""}`}
            onClick={() => onSelectHabit(habit)}
          >
            {habit}
          </div>
        ))}
        <button className="add-habit" onClick={onAddHabit}>
          +
        </button>
      </div>
    </div>
  );
};

export default HabitSelector;
