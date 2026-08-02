import Card from '../../../components/ui/Card.jsx';
import DayStatus from '../components/DayStatus.jsx';
function WeeklyConsistencyCard({ heading, data, completedDays }) {
  return (
    <Card className="col-span-2">
      <h2 className="text-lg/9 ">{heading}</h2>

      <ul className="flex flex-col gap-2 flex-wrap md:flex-row md:items-center text-base text-(--text) my-2">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex flex-row md:flex-col md:items-center gap-3"
          >
            <span>{item.day}</span>
            <DayStatus status={item.completed} />
          </li>
        ))}
      </ul>
      <span className="text-sm text-(--text-muted)">
        {completedDays}/7 days completed
      </span>
    </Card>
  );
}

export default WeeklyConsistencyCard;
