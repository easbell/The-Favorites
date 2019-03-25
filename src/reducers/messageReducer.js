export const messageReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.message
  default:
    return state;
  }
}