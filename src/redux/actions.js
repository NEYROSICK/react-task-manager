import { nanoid } from 'nanoid';
import { actions } from './constants';

export const addTask = text => {
  return {
    type: actions.addTask,
    payload: { id: nanoid(), completed: false, text },
  };
};

export const removeTask = id => {
  return {
    type: actions.removeTask,
    payload: id,
  };
};

export const checkTask = id => {
  return {
    type: actions.checkTask,
    payload: id,
  };
};

export const changeFilter = name => {
  return {
    type: actions.changeFilter,
    payload: name,
  };
};
