import React from 'react';

function TreasureHunt({ treasureHunt }) {
  const { date, time, location } = treasureHunt;
  return (
    <div className="event-card">
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>Get ready to unravel the mysteries and win exciting prizes!</p>
    </div>
  );
}

export default TreasureHunt;
