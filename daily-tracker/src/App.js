import "./styles/theme.scss";
import seedrandom from "seedrandom";
import HabitManager from "./services/habit-api/HabitManager.js";
import HabitBloom from "./components/habit-bloom/HabitBloom.jsx";
import LanguageProvider from "./context/LanguageContext.js";
import SettingsPanel from "./components/setting-button/SettingsPanel.js";
import ThemeProvider from "./context/ThemeContext.js";
import { HabitProvider } from "./context/HabitContext.js";
import HabitSelector from "./components/HabitSelector.js";
import Heatmap from "./components/HeatMap.js";

import React, { useState, useEffect, useMemo } from "react";

function App() {
  // 1. Define the state variables
  // 2. Load data from notion API and convert it to BloomData
  // 3. Pass the data to the components

  const [data, setData] = useState(generateGrid());

  const handleCellClick = (week, day) => {
    const newData = [...data];
    newData[week][day] = (newData[week][day] + 1) % 4;
    setData(newData);
  };

  // // <SettingsPanel />
  // return (
  //   <LanguageProvider>
  //     <ThemeProvider>
  //       <HabitProvider>
  //         <div className="app-container">
  //           <HabitSelector
  //             habits={habits}
  //             selectedHabit={selectedHabit}
  //             onSelectHabit={handleSelectHabit}
  //             onAddHabit={handleAddHabit}
  //           />
  //           <Heatmap data={data} onCellClick={handleCellClick} />
  //         </div>
  //       </HabitProvider>
  //     </ThemeProvider>
  //   </LanguageProvider>
  // );
  const fakeData = useMemo(() => generateFakeData(), []);
  const [habits, setHabits] = useState(fakeData.getHabitList());
  const [selectedHabit, setSelectedHabit] = useState(habits[0]);
  const [habitData, setHabitData] = useState(
    fakeData.getHabitLast365Days(selectedHabit)
  );

  useEffect(() => {
    setHabitData(fakeData.getHabitLast365Days(selectedHabit));
  }, [selectedHabit, fakeData]);

  const handleSelectHabit = (habit) => {
    setSelectedHabit(habit);
  };

  const handleAddHabit = () => {
    const newHabit = prompt("Enter new habit:");
    if (newHabit) {
      setHabits([...habits, newHabit]);
      fakeData.addHabit(newHabit, "count", "times");
    }
  };

  //<SettingsPanel />
  return (
    <LanguageProvider>
      <ThemeProvider>
        <HabitSelector
          habits={habits}
          selectedHabit={selectedHabit}
          onSelectHabit={handleSelectHabit}
          onAddHabit={handleAddHabit}
        />
        <HabitBloom HabitData={habitData} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 52; i++) {
    grid.push(new Array(7).fill(0)); // 52 周，每周 7 天
  }
  return grid;
};

function generateFakeData() {
  const rng = seedrandom("1127");
  const bloomData = new HabitManager(); // 创建一个 BloomData 实例
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 365); // 设置起始日期为365天前

  // 定义习惯数据，包括名字、类型和单位
  const habits = [
    { name: "exercise", type: "count", unit: "minutes" },
    { name: "study", type: "count", unit: "hours" },
    { name: "drinkWater", type: "value", unit: "liters" },
  ];

  // 为每个习惯生成数据
  habits.forEach((habit) => {
    bloomData.addHabit(habit.name, habit.type, habit.unit);

    // 生成100条假数据
    for (let i = 0; i < 100; i++) {
      // 随机选择一个日期
      const randomDate = new Date(startDate);
      randomDate.setDate(startDate.getDate() + Math.floor(Math.random() * 365)); // 在365天内随机选择日期

      // 根据习惯类型生成数据值
      let randomValue;
      if (habit.type === "count") {
        randomValue = Math.floor(rng() * 60) + 1; // 随机值，范围从1到60（分钟/小时）
      } else if (habit.type === "value") {
        randomValue = (rng() * 5).toFixed(2); // 随机值，范围从1到5（升）
      }

      // 保存数据到该习惯
      bloomData.saveOneHabitData(habit.name, randomDate, randomValue);
    }
  });

  return bloomData;
}
