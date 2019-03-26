import React from 'react';
import ShowsContainer from './ShowsContainer'
import { mapStateToProps } from './ShowsContainer'
import { shallow } from 'enzyme'

describe('ShowsContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ShowsContainer />
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