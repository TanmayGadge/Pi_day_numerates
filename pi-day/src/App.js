import React from "react";
import "./App.css";
import { EventCard, TreasureHunt } from "./components";

function App() {
  const speakerEvents = [
    {
      date: "March 14th",
      time: "10:30 AM - 11:30 AM",
      location: "Torna Hall",
      speaker: "Mr. Ravi Khare ",
      des: "CEO, Symphony-Pune",
      linkedin: "https://www.linkedin.com/in/ravi-khare-a5432714/",
    },
    {
      date: "March 14th",
      time: "11:30 AM - 12:30 PM",
      location: "Torna Hall",
      speaker: "Dr. Sheetal Ghorpade",
      des: "Director(Data Science), Rubiscape Pune",
      linkedin: "https://www.linkedin.com/in/sheetalghorpade/",
    },
  ];

  const treasureHunt = {
    date: "March 14th",
    time: "2:00 PM onwards",
    location: "3rd Floor, Maitreyi bld",
  };

  return (
    <div className="App">
      <h1>Celebrate Pi Day with Us!</h1>
      <h2>
        Join us for a series of captivating speaker events and an exhilarating
        treasure hunt!
      </h2>

      <h3>Speaker Events:</h3>
      <div className="events-container">
        {speakerEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>

      <h3>Treasure Hunt:</h3>
      <TreasureHunt treasureHunt={treasureHunt} />

      <p>
        Don't miss out on this mathematical extravaganza! Save the dates and
        join us in celebrating the infinite wonders of Pi!
      </p>
    </div>
  );
}

export default App;
