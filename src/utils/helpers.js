import { fetchData } from './fetch';

export const cleanMovieData = (movies) => {
  return movies.results.map(movie => {
    return ({
        title: movie.title || movie.name,
        rating: movie.vote_average,
        id: movie.id,
        releaseDate: movie.release_date,
        synopsis: movie.overview,
        posterImage: movie.poster_path
    })
  })
}

export const fetchAllFavorites = async (id) => {
  const url = `http://localhost:3000/api/users/${id}/favorites`;
  const fetchedFavorites = await fetchData(url);
  const cleanedFavorites = cleanFavorites(fetchedFavorites.data)
  return cleanedFavorites;
}

const cleanFavorites = (favorites) => {
  return favorites.map(movie => {
    return movie.movie_id
  })
}