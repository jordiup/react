import React, { Component } from 'react';
import  {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '' ,
        errors: {}
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    
    onSubmit = async (dispatch, e) => {
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
                const { dispatch } = value;
                return (
                    <div className="card mb-3">
                    <h1 className="card-header">Edit Contact</h1>
                    <div className="card-body">
                        <form action="" onSubmit={this.onSubmit.bind(this,dispatch)}>
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
        </Consumer>
    )

  }
}

export default EditContact;