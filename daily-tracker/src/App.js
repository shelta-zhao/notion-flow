import "./App.css";
import BloomData from "./modules/BloomData.js";
import HabitBloom from "./components/habit-bloom/HabitBloom.jsx";

function App() {
  const fakeData = generateFakeData();

  return (
    <div className="App">
      <HabitBloom BloomData={fakeData} />
    </div>
  );
}

export default App;

function generateFakeData() {
  const bloomData = new BloomData("count"); // 创建一个 BloomData 实例
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 365); // 设置起始日期为365天前

  // 生成100条假数据
  for (let i = 0; i < 100; i++) {
    // 随机选择一个日期
    const randomDate = new Date(startDate);
    randomDate.setDate(startDate.getDate() + Math.floor(Math.random() * 365)); // 在365天内随机选择日期

    // 随机生成数据值
    const randomValue = Math.floor(Math.random() * 20) + 1; // 随机值，范围从1到100

    // 保存数据
    bloomData.saveOneData(randomDate, randomValue);
  }

  // 输出生成的数据
  return bloomData.getLast365Days();
}
