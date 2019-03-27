import React from 'react';
import { ShowsContainer } from './ShowsContainer'
import { mapStateToProps } from './ShowsContainer'
import { shallow } from 'enzyme'
import { mockMovieContainer, mockDataResponse } from '../../utils/mockData';


describe('ShowsContainer', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow(
      <ShowsContainer shows={mockDataResponse}/>
    )
    
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    it('should return an object with movies', () => {
      const shows = mockMovieContainer;
      const mockState = {
        shows
      }

      expect(mapStateToProps(mockState).shows).toEqual(mockMovieContainer)
    });
  })
})