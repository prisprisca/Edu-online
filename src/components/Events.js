import React from "react";
import "../style/Events.css";

function Events({ id, title, image }) {
  return (
    <div className="events">
      <div className="event-info">
        <strong>{title}</strong>
      </div>

      <img src={image} alt="lady on her laptop" />
    </div>
  );
}

export default Events;
