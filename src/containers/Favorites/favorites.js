// import React, { Component } from 'react';
// import Movie from '../components/Movie';
// import { Link } from 'react-router-dom';

// class Favorites extends Component{
//   renderMovies = () => {
//     return this.props.movies.map(movie => {
//       return (
//         <Link to={`/movies/${movie.id}`} key={movie.id} >
//           <Movie  
//             {...movie}
//           />
//         </Link>
//       )
//     })
//   }

//   render() {
//     return (
//       <div className="movie-container">
//         {this.renderMovies()}
//       </div>
//     )
//   }
// }

// export default Favorites