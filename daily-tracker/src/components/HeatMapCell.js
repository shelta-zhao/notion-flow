import React from "react";

const HeatmapCell = ({ value, onClick }) => {
  const getColor = (value) => {
    if (value === 0) return "#ebedf0"; // 空白
    if (value === 1) return "#c6e48b"; // 低强度
    if (value === 2) return "#7bc96f"; // 中强度
    return "#196127"; // 高强度
  };

  return (
    <div
      className="heatmap-cell"
      style={{ backgroundColor: getColor(value) }}
      onClick={onClick}
    />
  );
};

export default HeatmapCell;
