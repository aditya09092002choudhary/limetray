import { memo, useMemo } from "react";
import { useTaskContext } from "../context/TaskContext";

export const FilterButtons = memo(() => {
  const { filter, setFilter, stats } = useTaskContext();

  const filters = useMemo(() => [
    { key: 'all', label: 'All', count: stats.total },
    { key: 'pending', label: 'Pending', count: stats.pending },
    { key: 'completed', label: 'Completed', count: stats.completed },
  ], [stats]);

  return (
    <div className="filter-buttons">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`filter-btn ${filter === key ? 'active' : ''}`}
        >
          {label} <span className="count">({count})</span>
        </button>
      ))}
    </div>
  );
});