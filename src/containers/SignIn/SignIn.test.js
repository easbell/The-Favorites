import React from 'react';
import {SignIn} from './SignIn'
import { mapDispatchToProps } from './SignIn'
import { shallow } from 'enzyme'

describe('SignIn', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <SignIn />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when handleChange is invoked', () => {
  })

  describe('mapDispatchToProps', () => {
    it('should pass correct type when addFavoriteToStore is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).logInUser()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOG_IN_USER' })
    });

    it('should pass correct type when deleteFavorite is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).addFavoritesToState()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_ALL_FAVORITES' })
    })

    it('should pass correct type when addMessage is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).addMessage()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_MESSAGE' })
    })

    it('should call addMessage when a sign attempt is made', async () => {

      const mockFn = jest.fn()

      const wrapper = shallow(
        <SignIn addMessage={mockFn}/>
      )

      const event = { preventDefault: () => {} }
      jest.spyOn(event, 'preventDefault')
      const mockResponse = 'success'

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockResponse)
      }))

      await wrapper.instance().handleSignIn(event)

      expect(mockFn).toHaveBeenCalled()
    })
  })
})