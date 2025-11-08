import { Check, Circle, Trash2 } from "lucide-react";
import { memo, useCallback, useState } from "react";
import { useTaskContext } from "../context/TaskContext";

export const TaskItem = memo(({ task, index }) => {
  const { toggleTask, deleteTask } = useTaskContext();
  const [isDragging, setIsDragging] = useState(false);

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [task.id, toggleTask]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [task.id, deleteTask]);

  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget);
    e.dataTransfer.setData('taskIndex', index.toString());
  }, [index]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`task-item ${task.completed ? 'completed' : ''} ${isDragging ? 'dragging' : ''}`}
    >
      <button onClick={handleToggle} className="checkbox">
        {task.completed ? <Check size={18} /> : <Circle size={18} />}
      </button>
      <span className="task-text">{task.text}</span>
      <button onClick={handleDelete} className="delete-btn">
        <Trash2 size={18} />
      </button>
    </div>
  );
});