import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>
        {/* <Link className="option" to="/signin">Sign in</Link> */}
        {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>Sign out</div>
          :
          <div className='option' to='/signin'>Sign in</div>
        }
    </div>
  </div>
) 

export default Header;