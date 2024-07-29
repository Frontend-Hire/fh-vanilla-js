import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';

export default function App() {
  const [tasks, setTasks] = React.useState([]);

  const onAddTask = (taskName) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(), // Not a great way to generate IDs
        title: taskName,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className="container space-y-4 p-4">
      <h1 className="text-xl">Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      <TaskList>
        {tasks.map((task, index) => (
          <TaskListItem key={task.id}>
            {index + 1}. {task.title}
          </TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}
