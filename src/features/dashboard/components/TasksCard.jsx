import Card from '../../../components/ui/Card.jsx';

function TasksCard({ tasks }) {
  return (
    <Card className="col-span-2">
      <h2 className="text-lg/9">{tasks.heading}</h2>
      <ul>
        {tasks.tasks.map(({ task, id }) => (
          <li key={id}>
            <label>
              <input type="checkbox" value={task} disabled />
              {task}
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default TasksCard;
