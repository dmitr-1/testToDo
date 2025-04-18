import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskFormData } from '../../types/Task';
import { v4 as uuidv4 } from 'uuid';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskFormData>) => {
      const newTask: Task = {
        id: uuidv4(),
        ...action.payload,
      };
      state.tasks.push(newTask);
    },
    updateTask: (state, action: PayloadAction<{ id: string; data: TaskFormData }>) => {
      const { id, data } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...data,
        };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
