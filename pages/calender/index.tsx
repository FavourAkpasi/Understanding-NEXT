import AppCalender from "../../components/calender/calender";
import { CalenderStyle } from "../../components/calender/style";
import { Event } from "../../types";

const events: Event[] = [
  {
    title: "",
    start: "2023-01-01T10:00:00",
    end: "2023-01-01T12:00:00",
    allDay: false,
    classNames: "lab",
  },
  {
    title: "Event 2",
    start: "2023-01-02T15:00:00",
    end: "2023-01-02T17:00:00",
    allDay: false,
    classNames: "home",
  },
  {
    title: "Event 3",
    start: "2023-01-03T19:00:00",
    end: "2023-01-03T22:00:00",
    allDay: false,
    classNames: "home",
  },
  {
    title: "Event 4",
    start: "2023-01-28T19:00:00",
    end: "2023-01-28T22:00:00",
    allDay: false,
    classNames: "lab",
  },
  {
    title: "Event 5",
    start: "2023-01-28T15:00:00",
    end: "2023-01-28T17:00:00",
    allDay: false,
    classNames: "home",
  },
  {
    title: "Event 6",
    start: "2023-01-29T15:00:00",
    end: "2023-01-29T17:00:00",
    allDay: false,
    classNames: "lab",
  },
];

const Calender: React.FC = () => {
  return (
    <div>
      <h1>React Calender Demo</h1>
      <CalenderStyle />
      <AppCalender events={events} />
    </div>
  );
};

export default Calender;
