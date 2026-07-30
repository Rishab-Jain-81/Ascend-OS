import Card from '../../../components/ui/Card.jsx';

function StreakCard({ streak }) {
  return (
    <Card className="col-span-2 sm:col-span-1">
      <h2 className="text-lg/9"> {streak.heading} </h2>
      <span className="text-base text-(--text-muted)"> {streak.body} </span>
    </Card>
  );
}

export default StreakCard;
