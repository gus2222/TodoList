import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskToEdit, newTaskName, newDueDate) => {
    const updatedTasks = tasks.map((task) =>
      task === taskToEdit ? { ...task, taskName: newTaskName, dueDate: newDueDate } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskToToggle) => {
    const updatedTasks = tasks.map((task) =>
      task === taskToToggle ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <AppHeader title="Lista de Tarefas" />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
