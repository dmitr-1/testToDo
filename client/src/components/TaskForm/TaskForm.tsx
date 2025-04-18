import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../store/hooks';
import { addTask, updateTask } from '../../store/slices/taskSlice';
import './TaskForm.scss';
import { TaskFormData } from '../../types/Task';

interface TaskFormProps {
  taskId?: string;
  initialData?: TaskFormData;
  onComplete?: () => void;
}

const TaskForm = ({ taskId, initialData = { title: '', description: '' }, onComplete }: TaskFormProps) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TaskFormData>({
    defaultValues: initialData,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    if (taskId) {
      dispatch(updateTask({ id: taskId, data }));
    } else {
      dispatch(addTask(data));
      reset({ title: '', description: '' });
    }
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label className='label'>Название задачи</label>
          <input
            id='title'
            type='text'
            className='input'
            {...register('title', {
              required: 'Название задачи обязательно',
              minLength: { value: 3, message: 'Минимум 3 символа' },
            })}
          />
          {errors.title && <span className='error-message'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label className='label'>Описание</label>
          <textarea
            id='description'
            className='text-area'
            {...register('description', {
              required: 'Описание обязательно',
            })}
          />
          {errors.description && <span className='error-message'>{errors.description.message}</span>}
        </div>

        <button className='submit-button' type='submit' disabled={!isValid}>
          Добавить задачу
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
