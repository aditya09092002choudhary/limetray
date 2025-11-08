import React, { useState, useCallback } from "react";
import { useTasks } from "../context/TaskContext";

const AddTaskForm = React.memo(function AddTaskForm() {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  }, [text, addTask]);

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        aria-label="New task"
        placeholder="Add a task..."
        value={text}
        onChange={e => setText(e.target.value)}
        maxLength={200}
      />
      <button type="submit" className="btn">Add</button>
    </form>
  );
});

export default AddTaskForm;
