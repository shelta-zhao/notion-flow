import "./App.css";
import seedrandom from "seedrandom";
import BloomData from "./modules/BloomData.js";
import HabitBloom from "./components/habit-bloom/HabitBloom.jsx";

function App() {
  const fakeData = generateFakeData();
  const studyData = fakeData["exercise"];

  return (
    <div className="App">
      <HabitBloom BloomData={studyData} />
    </div>
  );
}

export default App;

function generateFakeData() {
  const rng = seedrandom("1127");
  const bloomData = new BloomData(); // 创建一个 BloomData 实例
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

  // 输出生成的所有习惯的过去365天数据
  const last365DaysData = {};

  habits.forEach((habit) => {
    last365DaysData[habit.name] = bloomData.getHabitLast365Days(habit.name);
  });
  return last365DaysData;
}
