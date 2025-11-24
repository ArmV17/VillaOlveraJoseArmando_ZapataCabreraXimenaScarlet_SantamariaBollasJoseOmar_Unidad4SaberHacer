import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = () => {
    fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTask })
    }).then(() => setNewTask(""));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gestor de Tareas</h1>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>Agregar</button>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}
