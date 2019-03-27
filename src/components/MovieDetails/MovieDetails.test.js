import React from 'react';
import { shallow } from 'enzyme'
import MovieDetails from './MovieDetails'
import { mockSelectedMovie } from '../../utils/mockData'

describe('MovieDetails', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieDetails />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when there is a selected movie', () => {
    const wrapper = shallow(
      <MovieDetails selectedMovie={mockSelectedMovie} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})