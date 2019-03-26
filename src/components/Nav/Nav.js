import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions';

export const Nav = (props) => {
  const signOut = () => {
    props.logOutUser();
    window.location.reload()
  }

  return (
    <header>
      { !props.user &&
        <div>
          <NavLink to='/login' className="nav">Log In</NavLink>
          <NavLink to='/signup' className="nav">Sign Up</NavLink>
        </div>
      }
      { props.user &&
        <div>
          <button onClick={signOut}>Log Out</button>
          <NavLink to='/favorites' className="nav">Favorites</NavLink>
        </div>
      }
    </header>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.name,
})

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
