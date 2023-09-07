import { combineReducers } from 'redux';
import { actions, filterStatus } from './constants';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case actions.addTask:
      return [...state, action.payload];

    case actions.removeTask:
      return state.filter(task => task.id !== action.payload);

    case actions.checkTask:
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

    default:
      return state;
  }
};

const filtersInitialState = {
  status: filterStatus.all,
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case actions.changeFilter:
      return {
        status: action.payload,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
