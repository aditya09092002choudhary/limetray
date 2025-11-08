import { Plus } from "lucide-react";
import { memo, useCallback, useState } from "react";
import { useTaskContext } from "../context/TaskContext";

export const TaskInput = memo(() => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    
    if (!trimmedInput) {
      setError('Task cannot be empty');
      return;
    }

    if (trimmedInput.length < 3) {
      setError('Task must be at least 3 characters');
      return;
    }

    addTask(trimmedInput);
    setInput('');
    setError('');
  }, [input, addTask]);

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
    if (error) setError('');
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <div className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add a new task..."
          className={`task-input ${error ? 'error' : ''}`}
          maxLength={100}
        />
        <button type="submit" className="add-btn">
          <Plus size={20} />
          <span>Add</span>
        </button>
      </div>
      {error && <span className="error-message">{error}</span>}
    </form>
  );
});