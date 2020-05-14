import React from 'react';
import Button from '../components/UI/Button/Button'

const user = (props) => {
        
    return(
        <tbody>
            <tr key={props.id}>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.contact}</td>
                <td><Button display="Hidden"></Button>
                    <Button btnType="View">View</Button> 
                    <Button btnType="Update">Update</Button> 
                    <Button btnType="Delete">Delete</Button></td>     
            </tr>
        </tbody>
    );
};

export default user;