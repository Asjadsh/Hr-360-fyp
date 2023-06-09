// Calendar1.js
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Sidebar from "../components/sidebar";
import Main from "../components/Header";
import axios from "axios";

const localizer = momentLocalizer(moment);

const Calendar1 = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios
      .get("/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEventAdd = (newEvent) => {
    axios
      .post("/api/events", newEvent)
      .then((response) => {
        setEvents([...events, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEventUpdate = (updatedEvent) => {
    if (updatedEvent.title.trim() === "") {
      // If the updated title is blank, delete the event
      handleEventDelete(updatedEvent);
    } else {
      axios
        .put(`/api/events/${updatedEvent._id}`, updatedEvent)
        .then((response) => {
          const updatedEvents = events.map((event) =>
            event._id === response.data._id ? response.data : event
          );
          setEvents(updatedEvents);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleEventDelete = (eventToDelete) => {
    axios
      .delete(`/api/events/${eventToDelete._id}`)
      .then(() => {
        const updatedEvents = events.filter(
          (event) => event._id !== eventToDelete._id
        );
        setEvents(updatedEvents);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <Sidebar />
        <main className="main-wrap">
          <Main />
          <section className="content-main">
            <div className="content-header">
              <h2 className="content-title">Team Calendar</h2>
            </div>
          </section>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={(slotInfo) => {
              const title = prompt("Enter event title:");
              if (title) {
                const newEvent = {
                  title,
                  start: slotInfo.start,
                  end: slotInfo.end,
                };
                handleEventAdd(newEvent);
              }
            }}
            onSelectEvent={(event) => {
              const title = prompt("Update event title:", event.title);
              const updatedEvent = {
                ...event,
                title,
              };
              handleEventUpdate(updatedEvent);
            }}
            onSelecting={(range) => {
              // Prevent selecting multiple days
              return range.start === range.end;
            }}
            onDoubleClickEvent={(event) => {
              if (
                window.confirm("Are you sure you want to delete this event?")
              ) {
                handleEventDelete(event);
              }
            }}
            style={{ height: "520px", padding: "20px"}}
          />
        </main>
      </div>
    </>
  );
};

export default Calendar1;