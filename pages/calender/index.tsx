import AppCalender from "../../components/calender";

const events = [
  { title: "event 1", date: "2023-01-03" },
  { title: "event 2", date: "2023-01-02" },
  { title: "event 3", date: "2023-01-04" },
  { title: "event 2", date: "2023-01-06" },
  { title: "event 2", date: "2023-01-20" },
];

const Calender = () => {
  return (
    <div>
      <h1>React Calender Demo</h1>
      <AppCalender events={events} />
    </div>
  );
};

export default Calender;
