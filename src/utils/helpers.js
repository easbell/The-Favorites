export const cleanMovieData = (movies) => {
  return movies.results.map(movie => {
    return ({
        title: movie.title,
        rating: movie.vote_average,
        id: movie.id,
        releaseDate: movie.release_date,
        synopsis: movie.overview,
        posterImage: movie.poster_path
    })
  })
}