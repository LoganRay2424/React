import React from 'react';

const Results = (props) => {
    const { firstName, lastName, email, password, cPassword } = props.data;
    return (
        <div>
            <h2>Results</h2>
            <p>First Name: {firstName}</p>
            <p>last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Conmirm Password: {cPassword}</p>
        </div>
    );
};
export default Results;