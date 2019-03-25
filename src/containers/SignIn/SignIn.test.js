import React from 'react';
import SignIn from './SignIn'
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
})