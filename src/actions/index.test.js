import * as actions from './index';
import { mockMovies, mockUser } from '../utils/mockData';

describe('actions', () => {
  describe('addAllMovies', () => {
    it('should a return a type of ADD_ALL_MOVIES with all the movies', () => {
      const expected = {
        type: 'ADD_ALL_MOVIES',
        movies: mockMovies
      }
  
      const result = actions.addAllMovies(mockMovies)
  
      expect(result).toEqual(expected)
    })
  })
  describe('manageUser', () => {
    it('should return a type of MANAGE_USER with a user', () => {
      const expected = {
        type: 'MANAGE_USER',
        user: mockUser
      }
      const user = mockUser;

      const result = actions.manageUser(user);
      expect(result).toEqual(expected)
    })
  })
  
})