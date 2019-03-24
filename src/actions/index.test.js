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
  describe('logInUser', () => {
    it('should return a type of LOG_IN_USER with a user', () => {
      const expected = {
        type: 'LOG_IN_USER',
        user: mockUser
      }
      const user = mockUser;

      const result = actions.logInUser(user);
      expect(result).toEqual(expected)
    })
  })

  describe('logOutUser', () => {
    it('should return a type of LOG_OUT_USER with an empty object', () => {
      const expected = {
        type: 'LOG_OUT_USER'
      }
      const result = actions.logOutUser();

      expect(result).toEqual(expected)
    })
  })

  describe('addAllShows', () => {
    it('should return a type of ADD_ALL_TVS with all the tv shows', () => {
      const expected = {
        type: 'ADD_ALL_TVS'
      }
      const result = actions.addAllShows();

      expect(result).toEqual(expected)
    })
  })
  
})