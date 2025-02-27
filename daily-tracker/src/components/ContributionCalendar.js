import React, { useState } from "react";
import { updateDatabase } from "../services/notionAPI";

const ContributionCalendar = () => {
  const [contributionData, setContributionData] = useState({
    name: "New Contribution",
    status: "Completed",
    date: new Date().toISOString(),
  });

  const handleUpdate = async () => {
    const result = await updateDatabase(contributionData);
    console.log("Database updated: ", result);
  };

  return (
    <div>
      <h1>Notion Contribution Calendar</h1>
      <button onClick={handleUpdate}>Update Notion Database</button>
    </div>
  );
};

export default ContributionCalendar;
