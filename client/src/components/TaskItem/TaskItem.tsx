import React from 'react';
import { Task } from '../../types/Task';

import './TaskItem.scss';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const handleDelete = () => {
    console.log('delete');
  };

  const handleEdit = () => {
    console.log('update');
  };

  return (
    <div className='task-item-container'>
      <div className='task-header'>
        <h3 className='task-title'>{task.title}</h3>
        <button className='action-button'>Выполнено</button>
      </div>
      <p className='task-description'>{task.description}</p>
      <div className='task-meta'>
        <div className='buttons-container'>
          <button className='action-button' onClick={handleEdit}>
            Редактировать
          </button>
          <button className='action-button' onClick={handleDelete}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
