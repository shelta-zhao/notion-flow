import React from "react";
import HeatmapCell from "./HeatMapCell.js";
import "../styles/HeatMap.scss";

const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 52; i++) {
    grid.push(Array(7).fill(0)); // 52周 × 7天
  }
  return grid;
};

const Heatmap = ({ data, onCellClick }) => {
  return (
    <div className="heatmap">
      {data.flat().map((value, index) => (
        <HeatmapCell
          key={index}
          value={value}
          onClick={() => {
            const weekIndex = Math.floor(index / 7);
            const dayIndex = index % 7;
            onCellClick(weekIndex, dayIndex);
          }}
        />
      ))}
    </div>
  );
};

export default Heatmap;
