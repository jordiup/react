import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import PropTypes from 'prop-types'
import  { connect } from 'react-redux';
import  { getContact, updateContact } from '../../actions/contactActions';


class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '' ,
        errors: {}
    };

    componentWillReceiveProps(nextProps, nextState){
        const {name, email, phone } = nextProps.contact;
        this.setState({
            name,
            email,
            phone,
        });
    
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getContact(id);
    }

    
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

        
        // Request 
        const {id} = this.props.match.params;
        
        const updContact = {
            id,
            name,
            email,
            phone
        };

        this.props.updateContact(updContact);

        // const res = axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

        // dispatch({type: 'UPDATE_CONTACT', payload:res.data});
                
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
        <div className="card mb-3">
        <h1 className="card-header">Edit Contact</h1>
        <div className="card-body">
            <form action="" onSubmit={this.onSubmit}>
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
                <input type="submit" className="btn btn-block btn-light" value="Update Contact"/>
            </form>

        </div>
    </div>            
    );
}}


EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    contact: state.contact.contact
});

export default connect(mapStateToProps, { getContact, updateContact })(EditContact);