import React, { useState } from "react";
import Popup from "react-popup";

function EventForm({ events, setEvents, event, date, close }) {
  const [title, setTitle] = useState(event ? event.title : "");
  const [location, setLocation] = useState(event ? event.location : "");

  const handleSave = () => {
    if (!title) return;

    if (event) {
      // Edit
      setEvents(events.map(e => (e === event ? { ...e, title, location } : e)));
    } else {
      // Add new
      setEvents([...events, { title, location, start: date, end: date }]);
    }
    close();
  };

  const handleDelete = () => {
    if (event) {
      setEvents(events.filter(e => e !== event));
    }
    close();
  };

  return (
    <Popup>
      <div className="mm-popup">
        <div className="mm-popup__content">
          <input
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mm-popup__box__footer__right-space">
          <button className="mm-popup__btn" onClick={handleSave}>Save</button>
          {event && (
            <>
              <button className="mm-popup__btn--info" onClick={handleSave}>Edit</button>
              <button className="mm-popup__btn--danger" onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
      </div>
    </Popup>
  );
}

export default EventForm;
