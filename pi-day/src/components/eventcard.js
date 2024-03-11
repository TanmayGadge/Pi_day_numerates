import React, { useState } from "react";
import linkedinLogo from "../assets/in.png";
import "./eventcard.css";
import Glass from "./glass";

function EventCard({ event }) {
  const { date, time, location, speaker, linkedin, des } = event;
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Glass>
      <div className="event-card" onClick={toggleMore}>
        <div className="event-header">
          <h3>{speaker}</h3>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
          </a>
        </div>
        <p className="event-des">
          <strong>{des}</strong>
        </p>
        <div className="event-details">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
        </div>
      </div>
      {showMore && (
        <div className="event-card-overlay">
          <p>More information on linkedin</p>
        </div>
      )}
    </Glass>
  );
}

export default EventCard;
