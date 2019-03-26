import React from 'react';
import MovieContainer from './MovieContainer'
import { mapStateToProps } from './MovieContainer'
import { shallow } from 'enzyme'
import { mockDataResponse } from '../../utils/mockData';

describe('MovieContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieContainer movies={mockDataResponse} />
    )

    expect(wrapper).toMatchSnapshot()
  });
  
  describe('mapStateToProps', () => {
    it.skip('should show previous value for state favorites', () => {
      const initialState = {
        movies: [{}, {}, {}]
      }

      expect(mapStateToProps(initialState).favorites).toEqual([{}, {}, {}])
    });
  })
})