import { memo, useCallback, useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { TaskItem } from "./TaskItem";

export const TaskList = memo(() => {
  const { tasks, reorderTasks } = useTaskContext();
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragOver = useCallback((e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  }, []);

  const handleDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('taskIndex'));
    if (dragIndex !== dropIndex) {
      reorderTasks(dragIndex, dropIndex);
    }
    setDragOverIndex(null);
  }, [reorderTasks]);

  if (tasks.length === 0) {
    return <div className="empty-state">No tasks yet. Add one to get started!</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          className={dragOverIndex === index ? 'drag-over' : ''}
        >
          <TaskItem task={task} index={index} />
        </div>
      ))}
    </div>
  );
});