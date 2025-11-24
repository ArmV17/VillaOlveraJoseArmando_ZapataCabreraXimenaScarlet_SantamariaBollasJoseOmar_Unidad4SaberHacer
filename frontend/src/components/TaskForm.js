import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTask = async () => {
    await axios.post('http://localhost:3000/tasks', { title, description, status: 'Pendiente' });
    setTitle('');
    setDescription('');
    onTaskAdded();
  };

  return (
    <div>
      <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={addTask}>Agregar Tarea</button>
    </div>
  );
}

export default TaskForm;
