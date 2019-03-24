export const addAllMovies = (movies) => ({
  type: 'ADD_ALL_MOVIES',
  movies,
})

export const logInUser = (user) => ({
  type: 'LOG_IN_USER',
  user,
})

export const logOutUser = () => ({
  type: 'LOG_OUT_USER',
})

export const addAllTvs = (shows) => ({
  type: 'ADD_ALL-TVS',
  shows,
})