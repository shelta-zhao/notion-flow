/**
 * @file    : src/components/habit-bloom
 * @author  : Shelta Zhao(赵小棠)
 * @email   : xiaotang_zhao@outlook.com
 * @brief   : define the component of HabitBloom
 * @version : 1.0.0 - 2025-02-28
 */

import clsx from "clsx";
import styles from "../../styles/HabitBloom.module.scss";
import React, { useState } from "react";

const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function HabitBloom({ HabitData, className, ...rest }) {
  // Get the current date and week
  if (!HabitData || Object.keys(HabitData).length === 0) {
    return (
      <div className={clsx(styles.container, className)}>No data available</div>
    );
  }
  const date = new Date(Object.keys(HabitData)[0]);
  const week = date.getDay();

  // Initialize the tiles and months
  const tiles = [];
  const months = [];
  let latestMonth = -1;

  // Push the empty tiles before the first data
  for (let i = 0; i < week; i++) {
    tiles.push(<span className={styles.tile} key={i} data-level={-1} />);
  }

  // Generate the tiles and months
  let index = week;
  Object.entries(HabitData).forEach(([record, habitGrid]) => {
    const date = new Date(record);
    const month = date.getMonth();

    if (date.getDay() === 0 && month !== latestMonth) {
      const gridColumn =
        Math.floor((index + week) / 7) + (latestMonth === -1 ? 1 : 2);
      latestMonth = month;
      months.push(
        <span className={styles.month} key={index} style={{ gridColumn }}>
          {MONTH[date.getMonth()]}
        </span>
      );
    }
    tiles.push(
      <span
        className={styles.tile}
        key={index++}
        data-level={habitGrid.getLevel()}
        title={`${habitGrid.getValue()} contributions on ${
          date.toISOString().split("T")[0]
        }`}
      />
    );
  });

  // Adjust the first month if necessary
  if (Object.keys(months).length > 12) {
    if (months[0].props.style.gridColumn > 3) {
      months[-1] = null;
    } else {
      months[0] = null;
    }
  }
  if (
    months[0] &&
    months[1].props.style.gridColumn - months[0].props.style.gridColumn < 3
  ) {
    months[0] = null;
  }

  // Return the habit bloom component
  return (
    <div className={clsx(styles.container)}>
      {/* 月份和周几 */}
      {months}
      <span className={styles.week}>Mon</span>
      <span className={styles.week}>Wed</span>
      <span className={styles.week}>Fri</span>

      <div className={styles.tiles}>{tiles}</div>

      <div className={styles.total}>233 contributions in the last year</div>
      <div className={styles.legend}>
        Less
        <i className={styles.tile} data-level={0} />
        <i className={styles.tile} data-level={1} />
        <i className={styles.tile} data-level={2} />
        <i className={styles.tile} data-level={3} />
        <i className={styles.tile} data-level={4} />
        More
      </div>
    </div>
  );
}

export default React.memo(HabitBloom);

function getTooltip(oneDay, date) {
  const s = date.toISOString().split("T")[0];
  switch (oneDay) {
    case 0:
      return `No contributions on ${s}`;
    case 1:
      return `1 contribution on ${s}`;
    default:
      return `${oneDay} contributions on ${s}`;
  }
}
