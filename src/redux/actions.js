import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: { id: nanoid(), completed: false, text },
  };
});

export const removeTask = createAction('tasks/removeTask');

export const checkTask = createAction('tasks/checkTask');

export const changeFilter = createAction('filters/changeFilter');
