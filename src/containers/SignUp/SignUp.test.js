import React from 'react';
import SignUp from './SignUp';
import { shallow } from 'enzyme';
import { fetchData } from '../../utils/fetch';
import { mockUser } from '../../utils/mockData';

jest.mock('../../utils/fetch');

describe('SignUp', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <SignUp />
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('handleAddUser', () => {
    it('should add a user to the database', async () => {
      const event = { preventDefault: () => {} }
      jest.spyOn(event, 'preventDefault')
      const mockUrl = 'www.website.com'

      const wrapper = shallow(
        <SignUp />
      )
      
      await wrapper.instance().handleAddUser(event)
      expect(fetchData).toHaveBeenCalled()
    })

  })
})