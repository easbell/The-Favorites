import { userReducer } from './userReducer'
import * as actions from '../actions/index'
import { mockUser } from '../utils/mockData';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = userReducer(undefined, {})
    expect(result).toEqual(expected);
  });

  it('should return the state with a user object', () => {
    const action = actions.logInUser(mockUser);
    const initialState = {};
    const expected = mockUser;

    const result = userReducer(initialState, action);
    expect(result).toEqual(expected)
  })

  it('should return the state with an empty object', () => {
    const action = actions.logOutUser();
    const initialState = mockUser;
    const expected = {};

    const result = userReducer(initialState, action);
    expect(result).toEqual(expected)
  })
})