import React, { useState } from "react";
import CalendarComponent from "./components/Calendar";
import EventFilters from "./components/EventFilters";
import "./styles/app.css";

function App() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all"); // all | past | upcoming

  return (
    <div className="app">
      <h1>Event Tracker</h1>
      <EventFilters filter={filter} setFilter={setFilter} />
      <CalendarComponent
        events={events}
        setEvents={setEvents}
        filter={filter}
      />
    </div>
  );
}

export default App;

