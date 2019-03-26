import React from 'react';
import {App} from './App';
import { shallow } from 'enzyme'
import { cleanMovieData } from '../../utils/helpers';
import { mockMovieResponse } from '../../utils/mockData';


describe('App', () => {
  let wrapper;
  beforeEach(() => {

    wrapper = shallow(
      <App />
    )

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockMovieResponse)
    }))
  })

  it('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  describe('fetchMovies', () => {

    it('should call window.fetch', async () => {

      // const instance = wrapper.instance()
      // jest.spyOn(instance, 'fetchMovies')
      // wrapper.instance().componentDidMount()
      
      wrapper.instance().fetchMovies()

      expect(window.fetch).toHaveBeenCalled()
    })
  })
})