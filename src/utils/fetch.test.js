import { fetchData } from './fetch';
import { mockMovieResponse } from './mockData';

describe('fetchData', () => {
  let mockData;

  beforeEach(() => {
    mockData = mockMovieResponse;

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      statue: 200,
      json: () => Promise.resolve(mockData)
    }))
  })

  it('takes in the expected URL', async () => {
    const url = 'www.users.com'
    
    await fetchData(url, undefined)

    expect(window.fetch).toBeCalledWith(url, undefined)
  })

  it('return expected data', async () => {
    const url = 'www.users.com'
    const result = await fetchData(url, undefined)
    expect(result).toEqual(mockData)
  })
})