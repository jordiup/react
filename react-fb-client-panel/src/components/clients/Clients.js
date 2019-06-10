import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Clients extends Component {
    render() {
        const clients = [
            {
                id: '412341234',
                firstName: 'Kevin',
                lastName: 'Bacon',
                email: 'kb@porky.com',
                phone: '555-555-555',
                balance: '30'
            },
            {
                id: '1923809123234',
                firstName: 'James',
                lastName: 'Brick',
                email: 'jb@legoblock.com',
                phone: '444-255-555',
                balance: '20'
            },
        ];

        if(clients){
            return (
                <div>
                    <div className="row">
                        <div className="col-md-">
                            <h2>
                                {' '}
                                <i className="fas fa-users"></i> Clients</h2>
                        </div>
                    </div>

                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => (
                                <tr key={client.id}>
                                    <td>{client.firstName} {client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>${parseFloat(client.balance).toFixed(2)}</td>
                                    <td>
                                        <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                        <i className="fas fa-arrow-circle-right"></i> Details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        } 
        else {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );   
        }
    }
}

export default Clients;