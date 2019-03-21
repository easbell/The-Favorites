import { userReducer } from './userReducer'
import * as actions from '../actions'
import { mockUser } from '../utils/mockData';

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = userReducer(undefined, {})
    expect(result).toEqual(expected);
  });

  it('should return the state with a movies array', () => {
    const action = actions.manageUser(mockUser);
    const initialState = {};
    const expected = mockUser;

    const result = userReducer(initialState, action);
    expect(result).toEqual(expected)
  })
})