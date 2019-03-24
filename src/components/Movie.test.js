import React from 'react'
import Movie from './Movie'
import { shallow } from 'enzyme'

describe('Movie', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Movie />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

