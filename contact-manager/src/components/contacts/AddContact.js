import React, { Component } from 'react';
import  {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '' ,
    };

    
    onSubmit = (disptach, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        
        disptach({type:'ADD_CONTACT', payload:newContact});
        
        // Clear state
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    }; 
    
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    
    render() {
    const { name, email, phone } = this.state;

    return (
        <Consumer>
            {value => {
                const { dispatch } = value;
                return (
                    <div className="card mb-3">
                    <h1 className="card-header">Add Contact</h1>
                    <div className="card-body">
                        <form action="" onSubmit={this.onSubmit.bind(this,dispatch)}>
                            <TextInputGroup
                                label="Name"
                                name="name"
                                placeHolder="Enter name..."
                                value={name}
                                onChange={this.onChange}
                            />
                            <TextInputGroup
                                label="Email"
                                name="email"
                                type="email"
                                placeHolder="Enter email address..."
                                value={email}
                                onChange={this.onChange}
                            />
                            <TextInputGroup
                                label="Phone"
                                name="phone"
                                placeHolder="Enter phone number..."
                                value={phone}
                                onChange={this.onChange}
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

export default AddContact;