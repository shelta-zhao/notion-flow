import logo from "./logo.svg";
import "./App.css";
import ContributionCalendar from "./components/habit-bloom/habitBloom.jsx";

function App() {
  const fakeData = [
    { level: 1, count: 5, date: 1728272654618 },
    { level: 2, count: 10, date: 1728272654618 },
    { level: 3, count: 15, date: 1728272654618 },
    { level: 4, count: 20, date: 1728272654618 },
    // 继续添加更多的假数据
  ];

  return (
    <div className="App">
      <ContributionCalendar contributions={fakeData} />
    </div>
  );
}

export default App;
