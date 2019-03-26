import React from 'react';
import { Favorites } from './favorites'
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

  it('should match snapshot with favorites', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot without favorites', () => {
    props = {
      favorites: [],
      movies: mockDataResponse
    }

    wrapper = shallow(
      <Favorites {...props}/>
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('filterMovies', () => {
    it('should call renderMovies', () => {
      wrapper.instance().filterMovies = mockDataResponse

      wrapper.instance().renderMovies()

      expect(wrapper.instance().filterMovies).toHaveBeenCalled()
    })
  })
  


})