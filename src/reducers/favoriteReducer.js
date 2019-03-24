export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_FAVORITE':
      return action.id
  default:
    return state;
  }
}