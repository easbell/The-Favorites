import React from 'react';
import { shallow } from 'enzyme'
import MovieDetails from './MovieDetails'

describe('MovieDetails', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieDetails />
    )
    expect(wrapper).toMatchSnapshot()
  })
})