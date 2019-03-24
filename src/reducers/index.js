import { combineReducers } from "redux";
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { showsReducer } from './showsReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  shows: showsReducer,
  user: userReducer,
})