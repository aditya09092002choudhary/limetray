import { Moon, Sun } from "lucide-react";
import { FilterButtons } from "./components/FilterButtons";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { TaskProvider, useTaskContext } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <TaskManagerApp />
    </TaskProvider>
  );
};

const TaskManagerApp = () => {
  const { theme, toggleTheme, stats } = useTaskContext();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <header className="header">
          <div>
            <h1>Task Manager</h1>
            <p className="subtitle">Stay organized and productive</p>
          </div>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </header>

        <div className="stats-bar">
          <div className="stat">
            <span className="stat-label">Total</span>
            <span className="stat-value">{stats.total}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Pending</span>
            <span className="stat-value pending">{stats.pending}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Completed</span>
            <span className="stat-value completed">{stats.completed}</span>
          </div>
        </div>

        <TaskInput />
        <FilterButtons />
        <TaskList />
      </div>
    </div>
  );
};

export default App;