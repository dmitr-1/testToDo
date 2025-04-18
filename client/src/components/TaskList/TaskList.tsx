import './TaskList.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import TaskItem from '../TaskItem/TaskItem';
import { setFilter } from '../../store/slices/taskSlice';

const TaskList = () => {
  const dispatch = useAppDispatch();
  const { tasks, filter } = useAppSelector(state => state.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as 'all' | 'completed' | 'incomplete';
    dispatch(setFilter(value));
  };

return (
    <div>
       <div className="filter-select">
        <select
          className="filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">Все</option>
          <option value="completed">Выполненные</option>
          <option value="incomplete">Актуальные</option>
        </select>
      </div>
      <div className="list-container">
      {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
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