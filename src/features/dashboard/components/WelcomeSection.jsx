import Card from '../../../components/ui/Card.jsx';

function WelcomeSection({ welcome }) {
  return (
    <Card className="col-span-2">
      <h2 className="text-lg/9 ">{welcome.heading}</h2>
      <p className="text-base text-(--text-muted) pb-3">{welcome.body}</p>
      <span className="text-xs/8 text-(--text-muted)">{welcome.footer}</span>
    </Card>
  );
}

export default WelcomeSection;
