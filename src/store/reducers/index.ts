import { combineReducers } from 'redux';
import { usersReducer } from './userReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  user: usersReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
