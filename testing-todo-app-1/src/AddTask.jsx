import React from 'react';

export default function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = React.useState('');

  const handleAddTask = (e) => {
    e.preventDefault();

    onAddTask(taskName);
  };

  return (
    <form className="space-x-2" onSubmit={handleAddTask}>
      <label htmlFor="task-input">Add Task: </label>
      <input
        className="rounded border px-2 py-1"
        id="task-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="rounded bg-blue-500 px-2 py-1 text-white">Add</button>
    </form>
  );
}
