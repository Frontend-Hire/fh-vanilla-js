import React from 'react';
import AddTask from './AddTask';
import Task from './Task';

export default function App() {
  const tasks = [{ id: 1, taskName: 'First Task' }];

  const addTask = () => {};

  const deleteTask = () => {};

  return (
    <div className="px-4 py-2">
      <AddTask onAdd={addTask} />
      {tasks.map((task, idx) => (
        <Task
          key={task.id}
          idx={idx}
          task={task}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
}
