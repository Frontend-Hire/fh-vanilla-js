import React from 'react';
import AddTask from './AddTask';
import Task from './Task';

export default function App() {
  const [tasks, setTasks] = React.useState([{ id: 1, taskName: 'First Task' }]);

  const addTask = (task) => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      return;
    }

    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      taskName: trimmedTask,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="px-4 py-2">
      <AddTask onAdd={addTask} />
      <button
        onClick={clearAllTasks}
        className="border border-red-500 bg-red-500 p-2 text-white"
      >
        Clear All
      </button>
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
