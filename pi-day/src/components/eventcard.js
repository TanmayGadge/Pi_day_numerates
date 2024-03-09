import React from "react";
import linkedinLogo from "../assets/in.png"; // Import the LinkedIn logo image
import "./eventcard.css";
function EventCard({ event }) {
  const { date, time, location, speaker, linkedin, description } = event;
  return (
    <div className="event-card">
      <div className="event-header">
        <h3>{speaker}</h3>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="linkedin-logo" />
        </a>
      </div>
      <p className="event-description">{description}</p>
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
  );
}

export default EventCard;
