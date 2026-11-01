import { useMemo, useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Set up project structure', done: true },
  { id: 2, title: 'Build UI shell', done: true },
  { id: 3, title: 'Create real app scaffold', done: false },
  { id: 4, title: 'Add polish and features', done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const completedCount = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks]
  );

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks((current) => [
      ...current,
      {
        id: Date.now(),
        title: newTask.trim(),
        done: false,
      },
    ]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-logo">A</div>
          <div>
            <p className="eyebrow">Workspace</p>
            <h1>Application</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Projects</button>
          <button className="nav-item">Analytics</button>
          <button className="nav-item">Settings</button>
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow muted">Dashboard</p>
            <h2>Project status</h2>
          </div>
          <button className="primary-btn">Create new</button>
        </header>

        <section className="stats-grid">
          <div className="stat-card accent">
            <span className="label">Tasks</span>
            <strong>{tasks.length}</strong>
          </div>
          <div className="stat-card">
            <span className="label">Completed</span>
            <strong>{completedCount}</strong>
          </div>
          <div className="stat-card">
            <span className="label">Progress</span>
            <strong>{Math.round((completedCount / tasks.length) * 100) || 0}%</strong>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>To-do list</h3>
              <span>{completedCount}/{tasks.length}</span>
            </div>

            <div className="task-input-row">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a task"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') addTask();
                }}
              />
              <button className="secondary-btn" onClick={addTask}>Add</button>
            </div>

            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className={task.done ? 'done' : ''}>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span>{task.title}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel highlight">
            <div className="panel-header">
              <h3>App details</h3>
            </div>
            <ul className="info-list">
              <li>
                <span>Stack</span>
                <strong>React + Vite</strong>
              </li>
              <li>
                <span>Mode</span>
                <strong>Installable app</strong>
              </li>
              <li>
                <span>Ready</span>
                <strong>For extension</strong>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
