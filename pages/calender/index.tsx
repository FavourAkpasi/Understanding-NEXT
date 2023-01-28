import AppCalender from "../../components/calender/calender";
import { CalenderStyle } from "../../components/calender/style";

const events: any = [
  { title: "event 1", date: "2023-01-03" },
  { title: "event 2", date: "2023-01-02" },
  { title: "event 3", date: "2023-01-04" },
  { title: "event 2", date: "2023-01-06" },
  { title: "event 2", date: "2023-01-20" },
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
