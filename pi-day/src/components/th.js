import React from "react";
import "./th.css";
import Glass from "./glass";

function TreasureHunt({ treasureHunt }) {
  const { date, time, location } = treasureHunt;
  return (
    <div className="flex-container th">
      <Glass>
        <div className="event-card th">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>Get ready to unravel the mysteries and win exciting prizes!</p>
        </div>
      </Glass>
    </div>
  );
}

export default TreasureHunt;
