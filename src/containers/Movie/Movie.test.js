import React from 'react'
import { Movie, mapDispatchToProps, mapStateToProps } from './Movie'
import { shallow } from 'enzyme'
import { mockMovieResponse } from '../../utils/mockData'


describe('Movie', () => {
  let wrapper;
  let mockFn = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <Movie favorites={[1, 2, 3]} 
             deleteFavorite={mockFn} 
             addFavoriteToState={mockFn} 
             user_id={1}
             id={123}
             addMessage={mockFn}
            />
    )

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockMovieResponse)
    }))
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('removeFavorite', () => {
    it('should delete a favorite from the api', async () => {


      wrapper.instance().removeFavorite()
      expect(window.fetch).toHaveBeenCalled()
    })

    it('should call deleteFavorite', () => {

      wrapper.instance().removeFavorite()
      expect(mockFn).toHaveBeenCalled()
    })

  })

  describe('addFavorite', () => {
    it('should add a favorite', () => {

      wrapper.instance().addFavorite()

      expect(window.fetch).toHaveBeenCalled()
    })

    it('should call addFavoriteToState', () => {

      wrapper.instance().removeFavorite()
      expect(mockFn).toHaveBeenCalled()
    })
  })

  describe('validateFavorite', () => {
    it('should check if a favorite exists', () => {

      wrapper.instance().validateFavorite()

      expect(mockFn).toHaveBeenCalled()
    })

    it('should display a message if there is no user id', () => {

      wrapper = shallow(
        <Movie favorites={[1, 2, 3]} 
               deleteFavorite={mockFn} 
               addFavoriteToState={mockFn} 
               user_id={false}
               id={123}
               addMessage={mockFn}
              />
      )

      wrapper.instance().validateFavorite()

      expect(mockFn).toHaveBeenCalled()
    })
  })
})

