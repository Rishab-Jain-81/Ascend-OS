import ChecklistItem from '../ui/checklistItem';

function Checklist({ tasks, toggleTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <ChecklistItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}

export default Checklist;
