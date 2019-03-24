export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.id]
    case 'ADD_ALL_FAVORITES':
      return action.favorites
  default:
    return state;
  }
}