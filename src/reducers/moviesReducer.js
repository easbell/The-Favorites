export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALL_MOVIES':
      return action.movies
  default:
    return state;
  }
}