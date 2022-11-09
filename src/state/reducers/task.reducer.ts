import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { TaskType } from '../types';

const initialState: {
  tasks: TaskType[];
} = {
  tasks: [],
};

export const notesSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      const newTasks = [...state.tasks];
      newTasks.push(action.payload);
      state.tasks = newTasks;
    },
    deleteTask: (state, action) => {
      const newTasks = [...state.tasks];
      state.tasks = newTasks.filter((t) => t.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTasks, addTask, deleteTask } = notesSlice.actions;

export default notesSlice.reducer;

export const selectTasks = (state: RootState) => state.tasks.tasks;
