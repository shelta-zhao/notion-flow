import React from "react";
import clsx from "clsx";
import styles from "./habitBloom.module.scss";

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

function ContributionCalendar({ contributions, className, ...rest }) {
  // const year = new Date().getFullYear() - 3;
  const year = 2028;
  const firstDayOfYear = new Date(Date.UTC(year, 0, 1));
  const startRow = getStartDayOfYear(year) % 7;
  const months = [];
  let latestMonth = -1;

  const tiles = [];
  for (let i = 0; i < startRow; i++) {
    tiles.push(<span className={styles.tile} key={i} data-level={-1} />);
  }

  for (let i = 0; i < 366; i++) {
    const nextDate = new Date(firstDayOfYear);
    nextDate.setDate(firstDayOfYear.getDate() + i);
    const month = nextDate.getMonth();

    if (nextDate.getDay() === 0 && month !== latestMonth) {
      const gridColumn =
        Math.floor((i + startRow) / 7) + (latestMonth === -1 ? 1 : 2);
      latestMonth = month;
      months.push(
        <span className={styles.month} key={i} style={{ gridColumn }}>
          {MONTH[month]}
        </span>
      );
    }
    const s = nextDate.toISOString().split("T")[0];
    tiles.push(
      <span
        className={styles.tile}
        key={i}
        data-level={0}
        title={`No contributions on ${s}`}
      />
    );
  }

  return (
    <div {...rest} className={clsx(styles.container, className)}>
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

export default React.memo(ContributionCalendar);

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

function getStartDayOfYear(year) {
  // Get the day of the week of the first day of the year
  const firstDay = new Date(year, 0, 1);
  return firstDay.getDay();
}

function isLeapYear(year) {
  // Check if the year is a leap year
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
