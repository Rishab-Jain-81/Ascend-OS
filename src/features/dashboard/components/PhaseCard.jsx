import Card from '../../../components/ui/Card.jsx';

function PhaseCard({ phase }) {
  return (
    <Card className="col-span-2 sm:col-span-1">
      <h2 className="text-lg/9"> {phase.heading} </h2>
      <span className="text-base text-(--text-muted)"> {phase.body} </span>
    </Card>
  );
}

export default PhaseCard;
