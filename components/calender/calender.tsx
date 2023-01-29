import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

const AppCalender = (events: any) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      dayHeaderFormat={{ weekday: "long" }}
      events={events}
      eventTimeFormat={{
        hour: "2-digit",
        minute: "2-digit",
        meridiem: true,
      }}
      views={{ dayGrid: { displayEventEnd: true } }}
      headerToolbar={{
        start: "title prev next dayGridMonth,timeGridWeek,timeGridDay",
        center: "",
        end: "Home Lab",
      }}
      customButtons={{
        Home: {
          text: "Home",
        },
        Lab: {
          text: "Lab",
          // click: function () {
          //   alert("clicked custom button 2!");
          // },
        },
      }}
      contentHeight="auto"
      aspectRatio={2}
    />
  );
};

export default AppCalender;
