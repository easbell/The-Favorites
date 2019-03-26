import React from 'react';
import MovieContainer from './MovieContainer'
import { mapStateToProps } from './MovieContainer'
import { shallow } from 'enzyme'
import { mockDataResponse, mockMovieResponse, mockMovieContainer } from '../../utils/mockData';

describe('MovieContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieContainer />
    )

    expect(wrapper).toMatchSnapshot()
  });
  
  describe('mapStateToProps', () => {
    it('should return an object with movies', () => {
      const movies = mockMovieContainer;
      const mockState = {
        movies
      }

      expect(mapStateToProps(mockState).movies).toEqual(mockMovieContainer)
    });
  })
})