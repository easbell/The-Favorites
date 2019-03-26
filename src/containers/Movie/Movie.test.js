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

  describe('mapStateToProps', () => {
    it('should show previous value for state favorites', () => {
      const initialState = {
        user: {id: 2},
        favorites: [1, 2, 3]
      }

      expect(mapStateToProps(initialState).favorites).toEqual([1, 2, 3])
    });

    it.skip('should show previous value for state user id', () => {
      const initialState = {
        user: {id: 2},
        favorites: [1, 2, 3]
      }

      expect(mapStateToProps(initialState).user.id).toEqual(2)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should pass correct type when addFavoriteToStore is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).addFavoriteToState()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_FAVORITE' })
    });

    it('should pass correct type when deleteFavorite is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).deleteFavorite()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'DELETE_FAVORITE' })
    })

    it('should pass correct type when addMessage is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).addMessage()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_MESSAGE' })
    })
  })
})