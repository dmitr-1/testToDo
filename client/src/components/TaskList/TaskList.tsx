import './TaskList.scss';
import { useAppSelector } from '../../store/hooks';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {

const { tasks } = useAppSelector(state => state.tasks);

return (
    <div>
      <div className="list-container">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <p className="empty-message">
            Нет доступных задач. Создайте новую задачу!
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskList;