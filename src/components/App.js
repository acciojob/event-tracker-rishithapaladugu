// Calendar.js (partial)
import React, { useState } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import Popup from 'react-popup';

moment.locale('en');
const localizer = BigCalendar.momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showEditDeletePopup, setShowEditDeletePopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterType, setFilterType] = useState('all'); // 'all', 'past', 'upcoming'

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setShowCreatePopup(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowEditDeletePopup(true);
  };

  const eventPropGetter = (event) => {
    const isPast = moment(event.end).isBefore(moment());
    return {
      style: {
        backgroundColor: isPast ? 'rgb(222, 105, 135)' : 'rgb(140, 189, 76)',
      },
    };
  };

  const filteredEvents = events.filter(event => {
    if (filterType === 'all') return true;
    const isPast = moment(event.end).isBefore(moment());
    if (filterType === 'past') return isPast;
    if (filterType === 'upcoming') return !isPast;
    return true;
  });

  return (
    <div>
      <div className="filter-buttons">
        <button className="btn" onClick={() => setFilterType('all')}>All</button>
        <button className="btn" onClick={() => setFilterType('past')}>Past</button>
        <button className="btn" onClick={() => setFilterType('upcoming')}>Upcoming</button>
      </div>
      <BigCalendar
        localizer={localizer}
        events={filteredEvents}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventPropGetter}
        // ... other props
      />
      {/* Create Event Popup */}
      {showCreatePopup && (
        <Popup
          // ... popup props
        >
          {/* Event creation form */}
        </Popup>
      )}
      {/* Edit/Delete Event Popup */}
      {showEditDeletePopup && (
        <Popup
          // ... popup props
        >
          {/* Event edit/delete options */}
        </Popup>
      )}
    </div>
  );
};

export default EventCalendar;

