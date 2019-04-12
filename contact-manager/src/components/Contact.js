import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

  state = {};

  // Function that is called from the h4 button note that an arrow function must be used to maintain the state
  onShowClick = (e) => {
    console.log(e.target);
  }

  render() {
    const { name,email,phone } = this.props.contact;

    return (
    <div className="card card-body mb-3">
      <h4>{name} <i onClick={this.onShowClick(this)} className="fas fa-sort-down"></i></h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

// Deprecated in favor of object-based declaration
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;
