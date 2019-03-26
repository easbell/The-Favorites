export const showsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALL_SHOWS':
      return action.shows
    default:
      return state;
  }
}