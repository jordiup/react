import React from 'react'
import PropTypes from 'prop-types';
// import './ContactDeprecatedStyle.css'

const Header = (props) => {
  const {branding} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className='Container'>
        <a href="/" className="navbar-brand">
          {branding}
        </a>
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>              
            </li>
          </ul>
        <div>
        </div>
       </div>
    </nav>
  );
};

// Header.displayName = 'Header'
// <div><h1 style={{}}>{props.branding}</h1></div>

Header.defaultProps = {
  branding: 'My app'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

const headingStyle = {
  color:'red',
  fontSize:'48pt'
}

export default Header
