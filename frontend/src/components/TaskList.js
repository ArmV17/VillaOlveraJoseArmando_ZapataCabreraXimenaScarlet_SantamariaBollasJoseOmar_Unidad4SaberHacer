import React from 'react';
import axios from 'axios';

function TaskList({ tasks, onTaskUpdated }) {
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    onTaskUpdated();
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <strong>{task.title}</strong>: {task.description} [{task.status}]
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
