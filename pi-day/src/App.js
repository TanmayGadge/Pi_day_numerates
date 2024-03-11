import React from "react";
import "./App.css";
import { EventCard, Navbar, TreasureHunt } from "./components";

function App() {
  const speakerEvents = [
    {
      date: "March 14th",
      time: "10:30 AM - 11:30 AM",
      location: "Torna Hall",
      speaker: "Mr. Ravi Khare ",
      des: "CEO, Symphony-Pune",
      linkedin: "https://www.linkedin.com/in/ravi-khare-a5432714/",
      more: "https://www.symphonytech.com/vda_kb/images/ravi_khare.png",
    },
    {
      date: "March 14th",
      time: "11:30 AM - 12:30 PM",
      location: "Torna Hall",
      speaker: "Dr. Sheetal Ghorpade",
      des: "Director(Data Science), Rubiscape Pune",
      linkedin: "https://www.linkedin.com/in/sheetalghorpade/",
      more: "https://www.inteliment.com/wp-content/uploads/2023/08/Dr.-Sheetal-Ghorpade.jpg",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <h1>
        Celebrate <span className="pi p">P</span>
        <span className="pi i">i</span> Day with Us!
      </h1>
      <h2>Join us for a series of captivating and exhilaratin events</h2>

      <h2>Speaker Events:</h2>
      <div className="events-container">
        {speakerEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>

      <h2>Treasure Hunt:</h2>
      <div className="events-container">
        <TreasureHunt />
      </div>
    </div>
  );
}

export default App;
