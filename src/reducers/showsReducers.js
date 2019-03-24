export const showsReducer = (state = [], action) {
  switch (action.type) {
    case 'ADD_ALL_TVS':
      return action.shows
  }
}