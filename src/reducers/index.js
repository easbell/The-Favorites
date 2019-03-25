import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';
import { showsReducer } from './showsReducer';
import { favoriteReducer } from './favoriteReducer';
import { messageReducer } from './messageReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  shows: showsReducer,
  user: userReducer,
  favorites: favoriteReducer,
  message: messageReducer
})