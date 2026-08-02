import Card from '../../../components/ui/Card.jsx';

function WelcomeSection({ greeting, body, date }) {
  return (
    <Card className="col-span-2">
      <h2 className="text-lg/9 ">{greeting}</h2>
      <p className="text-base text-(--text-muted) pb-3">{body}</p>
      <span className="text-xs/8 text-(--text-muted)">{date}</span>
    </Card>
  );
}

export default WelcomeSection;
