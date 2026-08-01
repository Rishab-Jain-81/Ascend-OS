import Card from '../../../components/ui/Card.jsx';

function TasksCard({ tasks, toggleTask }) {
  return (
    <Card className="col-span-2">
      <h2 className="text-lg/9">{tasks.heading}</h2>
      <ul>
        {tasks.tasks.map(({ task, id, completed }) => (
          <li key={id}>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTask(id)}
              />
              {task}
            </label>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default TasksCard;
