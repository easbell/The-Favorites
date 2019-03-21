export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'MANAGE_USER':
      return action.user
    default:
      return state;
  }
}