import React from 'react'
import Movie from './Movie'
import validateFavorite from './Movie'
import { shallow } from 'enzyme'
// jest.mock('./Movie.js', jest.fn)

describe('Movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Movie />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('validateFavorites', () => {
    it('should ', () => {
      wrapper.instance().addFavorite = jest.fn()

      wrapper.instance().validateFavorite()

      expect(wrapper.instance().addFavorite).toHaveBeenCalled()

    })
  })
})

