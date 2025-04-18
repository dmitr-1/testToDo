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
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
