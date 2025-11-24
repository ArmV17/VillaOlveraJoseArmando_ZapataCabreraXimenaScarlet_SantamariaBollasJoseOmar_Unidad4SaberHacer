import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:3000/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} onTaskUpdated={fetchTasks} />
    </div>
  );
}

export default App;
