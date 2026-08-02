import Card from '../../../components/ui/Card.jsx';
import Checklist from '../../../components/ui/checkList.jsx';
function TasksCard({ tasks, toggleTask, completedTasks, totalTasks }) {
  return (
    <Card className="col-span-2">
      <h2 className="text-lg/9">{tasks.heading}</h2>
      <div>
        {tasks.tasks.length === 0 ? (
          <span className="text-base text-(--text-muted)">
            🎉 No tasks for today.
          </span>
        ) : (
          <Checklist tasks={tasks.tasks} toggleTask={toggleTask} />
        )}
      </div>
      <h2 className="text-lg/9 mt-4">Completed:</h2>
      <span className="text-base ">
        {completedTasks} / {totalTasks}
      </span>
    </Card>
  );
}
export default TasksCard;
