import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [filter, setFilter] = useState('all');

  const addTask = useCallback((text) => {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [newTask, ...prev]);
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, [setTasks]);

  const reorderTasks = useCallback((startIndex, endIndex) => {
    setTasks(prev => {
      const result = Array.from(prev);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  }, [setTasks]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, [setTheme]);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  }), [tasks]);

  const value = useMemo(() => ({
    tasks: filteredTasks,
    allTasks: tasks,
    theme,
    filter,
    stats,
    addTask,
    toggleTask,
    deleteTask,
    reorderTasks,
    toggleTheme,
    setFilter,
  }), [filteredTasks, tasks, theme, filter, stats, addTask, toggleTask, deleteTask, reorderTasks, toggleTheme]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within TaskProvider');
  }
  return context;
};