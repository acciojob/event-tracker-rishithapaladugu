import React from "react";

function EventFilters({ filter, setFilter }) {
  return (
    <div className="filters">
      <button className="btn" onClick={() => setFilter("all")}>All</button>
      <button className="btn" onClick={() => setFilter("past")}>Past</button>
      <button className="btn" onClick={() => setFilter("upcoming")}>Upcoming</button>
    </div>
  );
}

export default EventFilters;
