import React from 'react';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav'
import { shallow } from 'enzyme'
import { mockUser } from '../../utils/mockData'

describe('Nav', () => {
  it('should match snapshot', () => {
    let wrapper = shallow(
      <Nav />
    )
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with movies', () => {
      const user = mockUser
      const mockState = {
        user
      }

      expect(mapStateToProps(mockState)).toEqual({user: user.name})
    });
  })
  
  describe('mapDispatchToProps', () => {
    it('should pass correct type when logOutUser is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).logOutUser()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOG_OUT_USER' })
    });
  })
})