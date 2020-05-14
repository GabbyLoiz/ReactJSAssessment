import React, { Component } from "react";

import User from './User';
import axios from '../axios-users';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';

import classes from './Users.css'

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        console.log('ComponentDidMount');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const fetchedUsers = [];
                for (let key in res.data) {
                    fetchedUsers.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, users: fetchedUsers});
                console.log('Import successful')
            })
            .catch(err => {
                console.log('Import unsuccessful')
            });
    }

    render() {

        let table = (
            <table className={classes.Table}>
                <thead>
                    <tr key="id">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {this.state.users.map(user =>(
                        <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        contact={user.phone}/>
                ))}
    
            </table>    
        );

        return (
            <div>
                {table}
            </div>
        );
    }
}

export default withErrorHandler(Users, axios);