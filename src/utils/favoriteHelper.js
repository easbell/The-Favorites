export const  validateFavorite = async (movie) => {
    const { user_id, id } = this.props
    const url = `http://localhost:3000/api/users/${user_id}/favorites`      
    if(user_id) {
      const allFavorites = await fetchData(url)
      allFavorites.data.forEach(favorite => {
        if(favorite.movie_id === id) {
          console.log('alreay in favorites')
        } else {
          this.addFavorite()
        }
      })
    } else {
      this.setState()
    }
  }

export const  addFavorite = async (e) => {
    const { id, title, rating, user_id, posterImage, synopsis, releaseDate } = this.props
    const url = "http://localhost:3000/api/users/favorites/new"
    const movie = {
      movie_id: id, 
      user_id: user_id, 
      title: title, 
      poster_path: posterImage, 
      release_date: releaseDate, 
      vote_average: rating, 
      overview: synopsis
    }
    try {
      await fetchData(url, {
        method: "POST", 
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json"
        }
      })
    } catch(error) {
      console.log(error.message)
    }
  }