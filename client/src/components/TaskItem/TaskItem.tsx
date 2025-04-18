import { Task } from '../../types/Task';
import './TaskItem.scss';
import { useAppDispatch } from '../../store/hooks';
import TaskForm from '../TaskForm/TaskForm';
import { deleteTask } from '../../store/slices/taskSlice';
import DeleteModal from '../modalDelete/DeleteModal';
import { useState } from 'react';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTask(task.id));
    setIsDeleteModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditComplete = () => {
    setIsEditing(false);
  };

  return (
    <div className='task-item-container'>
      {!isEditing ? (
        <>
          <div className='task-header'>
            <h3 className='task-title'>{task.title}</h3>
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
        </>
      ) : (
        <div className='edit-form-container'>
          <TaskForm
            taskId={task.id}
            initialData={{
              title: task.title,
              description: task.description,
            }}
            onComplete={handleEditComplete}
          />
          <button className='action-button' onClick={() => setIsEditing(false)}>
            Отменить
          </button>
        </div>
      )}
      <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={confirmDelete} title={`Удалить ${task.title}?`} confirmText='Удалить' cancelText='Отмена' />
    </div>
  );
};

export default TaskItem;
