import { showsReducer } from './showsReducer';
import * as actions from '../actions/index';
import { mockDataResponse } from '../utils/mockData';

describe('showsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = showsReducer(undefined, {});

    expect(result).toEqual(expected)
  })

  it('should return an array of TV shows', () => {
    const expected = mockDataResponse;
    const initialState = []
    const action = actions.addAllShows(mockDataResponse)

    const result = showsReducer(initialState, action);
    expect(result).toEqual(expected)
  })
})