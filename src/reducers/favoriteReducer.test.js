import { favoriteReducer } from './favoriteReducer';
import * as actions from '../actions/index';

describe('favoriteReducer', () => {
  it('should return the intial state', () => {
    const expected = [];
    const result = favoriteReducer(undefined, [])

    expect(result).toEqual(expected)
  })

  it('should return the state with an added favorite', () => {
    const action = actions.addFavorite(3);
    const initialState = [7, 8];
    const expected = [7, 8, 3];
    const result = favoriteReducer(initialState, action);

    expect(result).toEqual(expected);
  })

  it('should return the state with a favorites array', () => {
    const action = actions.addAllFavorites([1,2,3,4]);
    const initialState = [];
    const expected = [1,2,3,4];
    const result = favoriteReducer(initialState, action);

    expect(result).toEqual(expected);
  })
})