import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'

class AddClient extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newClient = this.state;

        const { firestore, history } = this.props;

        // If no balance field entered, make zero
        if(newClient.balance === ''){
            newClient.balance = 0;
        }

        firestore
            .add({ collection:'clients' }, newClient)
            .then(() => history.push('/'), console.log("jeff"));
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        const { disableBalanceOnAdd } = this.props.settings;

        return (
            <div>
                <div className="row">
                    {/* A six col div... */}
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                        <i className="fas fa-arrow-circle-left"></i> Back to dashboard</Link>                    
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Add Client</div>
                    <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" 
                            className="form-control"
                            name="firstName"
                            minLength="2"
                            required
                            onChange={this.onChange}
                            value={this.state.firstName}
                            />
                            </div>

                            <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" 
                            className="form-control"
                            name="lastName"
                            minLength="2"
                            required
                            onChange={this.onChange}
                            value={this.state.lastName}
                            />
                            </div>

                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                            />
                            </div>

                            <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" 
                            className="form-control"
                            name="phone"
                            minLength="10"
                            required
                            onChange={this.onChange}
                            value={this.state.phone}
                            />
                            </div>

                            <div className="form-group">
                            <label htmlFor="balance" style={disableBalanceOnAdd ? {'color':'grey'} : null}>Balance</label>
                            <input type="text" 
                            className="form-control"
                            name="balance"
                            onChange={this.onChange}
                            value={this.state.balance}
                            disabled={disableBalanceOnAdd}
                            />
                            </div>

                            <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                        </form>
                    </div>
                </div>
                {/* <h1>Add Client</h1> */}
            </div>
        )
    }
}

AddClient.propTypes = {
    firestore: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(),
    connect((state,props) => ({
        settings: state.settings
    })) 
)(AddClient);