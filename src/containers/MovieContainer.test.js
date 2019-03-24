import React from 'react';
import MovieContainer from './MovieContainer'
import { shallow } from 'enzyme'

describe('MovieContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MovieContainer />
    )

    expect(wrapper).toMatchSnapshot()
  })
})