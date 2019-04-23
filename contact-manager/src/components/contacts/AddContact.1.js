import React, { Component } from 'react'

// Uncontrolled component

class AddContact extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
        console.log(contact);
    };

    static defaultProps = {
        name: 'J. Smith',
        email: 'jsmitty@mail.com',
        phone: '08302194807',
    }
    
    render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <h1 className="card-header">Add Contact</h1>
        <div className="card-body">
            <form action="" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter name..." defaultValue={name} ref={this.nameInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter email address..." defaultValue={email} ref={this.emailInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter phone number..." defaultValue={phone} ref={this.phoneInput} />
                </div>
                <input type="submit" className="btn btn-block btn-light" value="Add Contact" />
            </form>

        </div>
      </div>
    )
  }
}

export default AddContact;