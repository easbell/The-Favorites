import React from 'react';
import Favorites from './favorites'
import { shallow } from 'enzyme'
import { mockDataResponse, mockFavorite } from '../../utils/mockData'

describe('favorites', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      favorites: [1, 2, 3, 4],
      movies: mockDataResponse
    }

    wrapper = shallow(
      <Favorites {...props}/>
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('filterMovies', () => {
    it('should call renderMovies', () => {
      wrapper.instance().renderMovies = jest.fn
      // const mockFavorites = mockFavorite
      wrapper.instance().filterMovies()

      expect(wrapper.instance().renderMovies).toHaveBeenCalled()
    })
  })
  


})