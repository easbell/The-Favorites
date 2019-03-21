import * as actions from './index';
import { mockMovies } from '../utils/mockData';

describe('actions', () => {
  it('should a return a type of ADD_ALL_MOVIES with all the movies', () => {
    const expected = {
      type: 'ADD_ALL_MOVIES',
      movies: mockMovies
    }

    const result = actions.addAllMovies(mockMovies)

    expect(result).toEqual(expected)
  })
})