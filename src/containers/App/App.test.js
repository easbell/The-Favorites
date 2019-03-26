import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme'
import { cleanMovieData } from '../../utils/helpers';
import { mockMovieResponse, mockUser, mockStateResult, mockSelectedMovie } from '../../utils/mockData';
import { fetchData } from '../../utils/fetch'

jest.mock('../../utils/fetch');
jest.mock('../../utils/helpers');

describe('App', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn()
    wrapper = shallow(
      <App addAllShows={mockFn}
           addAllMovies={mockFn}
      />)


    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockMovieResponse)
    }))
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when there is a selected movie', () => {
    wrapper = shallow(
      <App selectedMovie={mockSelectedMovie}/>
    )

    expect(wrapper).toMatchSnapshot();
  })

  it('calls fetchMovies when mounted', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchMovies');
    instance.componentDidMount();

    expect(instance.fetchMovies).toHaveBeenCalled();
    mockFn.mockClear()
  })

  it('calls fetchTv when mounted', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchTv');
    instance.componentDidMount();

    expect(instance.fetchTv).toHaveBeenCalled();
    mockFn.mockClear()
  })

  describe('fetchMovies', () => {
    it('should call fetchData', async () => {
      await wrapper.instance().fetchMovies()
      expect(fetchData).toHaveBeenCalled()
    })

    it('should call cleanMovieData', async () => {
      await wrapper.instance().fetchMovies()
      expect(cleanMovieData).toHaveBeenCalled()
    })

    it('should call addAllMovies', async () => {
      await wrapper.instance().fetchMovies()
      expect(mockFn).toHaveBeenCalled()
    })
  })

  describe('fetchTv', () => {
    it('should call fetchData', async () => {
      await wrapper.instance().fetchTv()
      expect(fetchData).toHaveBeenCalled()
    })

    it('should call cleanMovieData', async () => {
      await wrapper.instance().fetchMovies()
      expect(cleanMovieData).toHaveBeenCalled()
    })

    it('should call addAllShows', async () => {
      await wrapper.instance().fetchTv();
      expect(mockFn).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with movies, shows, user, and message', () => {
      const movies = mockMovieResponse;
      const shows = mockMovieResponse;
      const user = mockUser;

      const mockState = {
        shows,
        movies,
        user,
        message:''
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(mockStateResult)
    });
  })

  describe('mapDispatchToProps', () => {
    it('should pass correct type when addAllMovies is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).addAllMovies()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_ALL_MOVIES' })
    });

    it('should pass correct type when addAllShows is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).addAllShows()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_ALL_SHOWS' })
    })

    it('should pass correct type when logOutUser is called', () => {
      const dispatch = jest.fn()

      mapDispatchToProps(dispatch).logOutUser()
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOG_OUT_USER' })
    })
  })
})