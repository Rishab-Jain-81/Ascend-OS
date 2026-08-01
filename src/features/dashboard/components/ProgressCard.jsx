import Card from '../../../components/ui/Card.jsx';
import ProgressBar from '../../../components/ui/ProgressBar.jsx';

function ProgressCard({ heading, progress }) {
  return (
    <Card className="col-span-2">
      <h2 className="text-lg/9">{heading}</h2>
      <div className="flex items-center gap-2 pt-2">
        <ProgressBar progress={progress} />
        <span className="text-sm text-(--text-muted) ">{progress}%</span>
      </div>
    </Card>
  );
}

export default ProgressCard;
