import React from "react";
import THH from "../assets/image.png";
import logo from "../assets/logo.jpg";
import "./th.css";

function EventCard() {
  return (
    <article className="card">
      <div className="thumb" style={{ backgroundImage: `url(${THH})` }} />
      <div className="infos">
        <h2 className="title">
          Treasure Hunt
          <span
            className="flag"
            style={{ backgroundImage: `url(${logo})` }}
          ></span>
        </h2>
        <h3 className="date">March 14</h3>
        <h3 className="seats">Teams remaining: 30</h3>
        <p className="txt">
          Time: 4:30 PM onwards
          <br /> Location: 3rd Floor, Maitreyi bld <br />
          Get ready to unravel the mysteries and win exciting prizes!
        </p>
        <h3 className="details">Register Now!!</h3>
      </div>
    </article>
  );
}

export default EventCard;
