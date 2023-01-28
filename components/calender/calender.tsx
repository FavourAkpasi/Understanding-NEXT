import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const AppCalender = (events: any) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={events}
      dayHeaderFormat={{ weekday: "long" }}
      headerToolbar={{
        start: "title prev next",
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
    />
  );
};

export default AppCalender;
