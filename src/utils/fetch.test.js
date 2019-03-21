import { fetchData } from './fetch';
import { mockMovieResponse } from './mockData';

describe('fetchData', () => {
  let mockData;
  let fetch;

  beforeEach(() => {
    mockData = mockMovieResponse;

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      statue: 200,
      json: () => Promise.resolve(mockData)
    }))
  })

  it.skip('takes in the expected URL', async () => {
    const url = 'users.com'
    
    await fetchData(url)

    expect(fetch).toBeCalledWith(url)
  })

  it.skip('return expected data', async () => {
    const url = 'users.com'
    const result = await fetchData(url)
    expect(result).toEqual(mockData)
  })
})