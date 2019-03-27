import * as actions from './index';
import { mockDataResponse, mockUser } from '../utils/mockData';

describe('actions', () => {
  describe('addAllMovies', () => {
    it('should a return a type of ADD_ALL_MOVIES with all the movies', () => {
      const expected = {
        type: 'ADD_ALL_MOVIES',
        movies: mockDataResponse
      }
  
      const result = actions.addAllMovies(mockDataResponse)
  
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
    it('should return a type of ADD_ALL_SHOWS with all the tv shows', () => {
      const expected = {
        type: 'ADD_ALL_SHOWS',
        shows: mockDataResponse
      }
      const result = actions.addAllShows(mockDataResponse);

      expect(result).toEqual(expected)
    })
  })

  describe('addFavorite', () => {
    it('should return a type of ADD_FAVORITE with an id', () => {
      const expected = {
        type: 'ADD_FAVORITE',
        id: 4
      }

      const result = actions.addFavorite(4);

      expect(result).toEqual(expected);
    })
  })

  describe('addAllFavorites', () => {
    it('should return a type of ADD_ALL_FAVORITES with all favorite movies/shows', () => {
      const expected = {
        type: 'ADD_ALL_FAVORITES',
        favorites: [1, 3, 6, 2]
      }
  
      const result = actions.addAllFavorites([1, 3, 6, 2]);
  
      expect(result).toEqual(expected);
    })
  })

  describe('deleteFavorite', () => {
    it('should return a type of DELETE_FAVORITES with all favorite movies/shows', () => {
      const expected = {
        type: 'DELETE_FAVORITE',
        id: 4
      }
  
      const result = actions.deleteFavorite(4);
  
      expect(result).toEqual(expected);
    })
  })

  describe('addMessage', () => {
    it('should return a type of ADD_MESSAGE with all favorite movies/shows', () => {
      const expected = {
        type: 'ADD_MESSAGE',
        message: 'message'
      }
  
      const result = actions.addMessage('message');
  
      expect(result).toEqual(expected);
    })
  })
})