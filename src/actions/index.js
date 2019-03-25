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

export const addAllShows = (shows) => ({
  type: 'ADD_ALL_TVS',
  shows,
})

export const addFavorite = (id) => ({
  type: 'ADD_FAVORITE',
  id
})

export const addAllFavorites = (favorites) => ({
  type: 'ADD_ALL_FAVORITES',
  favorites
})

export const deleteFavorite = (id) => ({
  type: 'DELETE_FAVORITE',
  id
})

export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  message
})