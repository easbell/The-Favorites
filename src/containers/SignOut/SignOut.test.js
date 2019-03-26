import React from 'react';
import SignOut from './SignOut'
import { mapDispatchToProps } from './SignOut'
import { shallow } from 'enzyme'

describe('SignOut', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <SignOut />
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapDispatchToProps', () => {
    it('should pass correct type when addFavoriteToStore is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).logOutUser()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOG_OUT_USER' })
    });
  })
})