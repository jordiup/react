import React, { Component } from 'react'



class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '' ,
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
    
    render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <h1 className="card-header">Add Contact</h1>
        <div className="card-body">
            <form action="" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control form-control-lg" placeholder="Enter name..." value={name} onChange={this.onChange}/>
                </div>
            </form>
            <form action="">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control form-control-lg" placeholder="Enter email address..." value={email} onChange={this.onChange}/>
                </div>
            </form>
            <form action="">
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" className="form-control form-control-lg" placeholder="Enter phone number..." value={phone} onChange={this.onChange}/>
                </div>
            </form>
            <input type="submit" className="btn btn-block btn-light" value="Add Contact"/>

        </div>
      </div>
    )
  }
}

export default AddContact;