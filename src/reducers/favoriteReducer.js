export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.id]
    case 'ADD_ALL_FAVORITES':
      return action.favorites
    case 'DELETE_FAVORITE':
      return state.filter(movie => {
        return movie !== action.id
      })
  default:
    return state;
  }
}