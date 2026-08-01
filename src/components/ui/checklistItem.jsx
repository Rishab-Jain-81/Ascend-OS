function ChecklistItem({ task, toggleTask }) {
  return (
    <li>
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          className="accent-(--secondary)"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {task.task}
      </label>
    </li>
  );
}

export default ChecklistItem;
