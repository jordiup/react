import React, { Component } from 'react';
import  {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        id: uuid(),
        name: '',
        email: '',
        phone: '' ,
        errors: {}
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        // Check for errors 
        if(name === '') {
            this.setState({errors: {name: 'Name is required'}})
            return;
        }
        if(email === '') {
            this.setState({errors: {email: 'Email is required'}})
            return;
        }
        if(phone === '') {
            this.setState({errors: {phone: 'Phone is required'}})
            return;
        }
        
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        this.props.addContact(newContact);
        
        const res = axios
            .post('https://jsonplaceholder.typicode.com/users', newContact);
                            
        // Clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    }; 
    
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    
    render() {
    const { name, email, phone, errors } = this.state;

    return (
        <Consumer>
            {value => {
                return (
                    <div className="card mb-3">
                    <h1 className="card-header">Add Contact</h1>
                    <div className="card-body">
                        <form action="" onSubmit={this.onSubmit.bind(this)}>
                            <TextInputGroup
                                label="Name"
                                name="name"
                                placeHolder="Enter name..."
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}
                            />
                            <TextInputGroup
                                label="Email"
                                name="email"
                                type="email"
                                placeHolder="Enter email address..."
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}
                            />
                            <TextInputGroup
                                label="Phone"
                                name="phone"
                                placeHolder="Enter phone number..."
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}
                            />
                            <input type="submit" className="btn btn-block btn-light" value="Add Contact"/>
                        </form>
            
                    </div>
                  </div>            
                );
            }}
        </Consumer>
    )

  }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default connect(null,{ addContact })(AddContact);