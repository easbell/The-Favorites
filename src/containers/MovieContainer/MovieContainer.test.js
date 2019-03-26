import React from 'react';
import MovieContainer from './MovieContainer'
import { mapStateToProps } from './MovieContainer'
import { shallow } from 'enzyme'

describe('MovieContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieContainer />
    )

    expect(wrapper).toMatchSnapshot()
  });
  
  describe('mapStateToProps', () => {
    it('should show previous value for state favorites', () => {
      const initialState = {
        movies: [{}, {}, {}]
      }

      expect(mapStateToProps(initialState).favorites).toEqual([{}, {}, {}])
    });
  })
})