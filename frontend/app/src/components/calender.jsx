import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as booststap from "bootstrap";

function Calender(events) {
  const currentDate = new Date();
  let displayWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let calenderTools = "dayGridMonth,timeGridWeek,timeGridDay";
  if (displayWidth < 768) {
    // calenderTools = "";
    return;
  }

  return (
    <div id="calender">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: calenderTools,
        }}
        events={events}
        editable={false}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialDate={currentDate}
      />
    </div>
  );
}

export default Calender;
