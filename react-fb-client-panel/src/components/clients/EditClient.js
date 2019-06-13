import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import Spinner from '../layout/Spinner';

import React, { Component } from 'react'

class EditClient extends Component {
  
  constructor(props) {
    super(props);
    // Create refs 
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();

    const { client, firestore, history } = this.props; 

    // Updated client 
    const updClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance: this.balanceInput.current.value == '' ? 0 : this.balanceInput.current.value,
    } 

    // Update client in firestore 
    firestore
      .update({ collection: 'clients', doc: client.id}, updClient )
      .then(history.push('/'));
  }

  render() {

    const { client } = this.props;
    const { disableBalanceOnEdit } = this.props.settings;

    if(client) {
      return (
        <div>
        <div className="row">
            <div className="col-md-6">
                <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left"></i> Back to dashboard</Link>                    
            </div>
        </div>

        <div className="card">
            <div className="card-header">Edit client</div>
            <div className="card-body">
            <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" 
                    className="form-control"
                    name="firstName"
                    minLength="2"
                    required
                    ref={this.firstNameInput}
                    onChange={this.onChange}
                    defaultValue={client.firstName}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" 
                    className="form-control"
                    name="lastName"
                    minLength="2"
                    required
                    ref={this.lastNameInput}
                    onChange={this.onChange}
                    defaultValue={client.lastName}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    className="form-control"
                    name="email"
                    ref={this.emailInput}
                    onChange={this.onChange}
                    defaultValue={client.email}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" 
                    className="form-control"
                    name="phone"
                    minLength="10"
                    required
                    ref={this.phoneInput}
                    onChange={this.onChange}
                    defaultValue={client.phone}
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="balance">Balance</label>
                    <input type="text" 
                    className="form-control"
                    style={disableBalanceOnEdit ? {'color':'grey'} : null}
                    name="balance"
                    ref={this.balanceInput}
                    onChange={this.onChange}
                    defaultValue={client.balance}
                    disabled={disableBalanceOnEdit}
                    />
                    </div>

                    <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                </form>
            </div>
        </div>
        {/* <h1>Add Client</h1> */}
    </div>
)  
    } else {
      return <Spinner />
    }

  }
}


EditClient.PropTypes = {
  firestore: PropTypes.object.isRequired
}

export default compose(
  firestoreConnect(props => [
      { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
  ]), 
  connect(({ firestore: { ordered }, settings }, props) => ({
      client: ordered.client && ordered.client[0],
      settings
  }))
)(EditClient);