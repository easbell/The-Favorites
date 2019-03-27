import { messageReducer } from './messageReducer';
import * as actions from '../actions';
import { mockMessage } from '../utils/mockData';

describe('messageReducer', () => {
  it('should return initial state', () => {
    const expected = '';

    const result = messageReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return a message to global state', () => {
    const action = actions.addMessage(mockMessage)
    const initialState = ''
    const expected = mockMessage

    const result = messageReducer(initialState, action)
    expect(result).toEqual(expected)
  })
})