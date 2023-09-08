import { filterStatus } from './constants';
import { addTask, changeFilter, checkTask, removeTask } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => [...state, action.payload],
  [removeTask]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [checkTask]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitialState = {
  status: filterStatus.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [changeFilter]: (state, action) => {
    state.status = action.payload;
  },
});
