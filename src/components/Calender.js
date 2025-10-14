import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import EventForm from "./EventForm";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function CalendarComponent({ events, setEvents, filter }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setSelectedEvent(null);
    setPopupOpen(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setSelectedDate(event.start);
    setPopupOpen(true);
  };

  // Filter events
  const filteredEvents = events.filter(event => {
    const now = new Date();
    if (filter === "past") return event.start < now;
    if (filter === "upcoming") return event.start >= now;
    return true;
  });

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />
      {popupOpen && (
        <EventForm
          events={events}
          setEvents={setEvents}
          event={selectedEvent}
          date={selectedDate}
          close={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default CalendarComponent;
