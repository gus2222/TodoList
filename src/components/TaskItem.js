import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.taskName);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(task, newTaskName, newDueDate);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            required
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <div className="edit-form-actions">
            <button type="submit">Salvar</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
          </div>
        </form>
      ) : (
        <>
          <div>
            <h3>{task.taskName}</h3>
            <p>Data: {task.dueDate || 'Não definida'}</p>
            <span className={`task-item-status ${task.isCompleted ? 'completed' : 'pending'}`}>
              {task.isCompleted ? 'Concluída' : 'Pendente'}
            </span>
          </div>
          <div className="task-item-actions">
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => toggleComplete(task)} style={{ backgroundColor: task.isCompleted ? 'orange' : 'green' }}>
              {task.isCompleted ? 'Reabrir' : 'Concluir'}
            </button>
            <button onClick={() => deleteTask(task)} style={{ backgroundColor: 'red' }}>
              Deletar
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
