import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageBooks from '../ManageBooks/ManageBooks';
import './Admin.css';

const Admin = () => {

    
    return (
        <div>
            <div className="row">
                <div className="col-md-3 sidebar">
                    <h4>House of Books</h4>
                    <br />
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/managebooks'><p>Manage books</p></Link>
                    <Link to='/addbooks'><p>Add books</p></Link>
                </div>
                <div className="col-md-9">
                    
                </div>
            </div>
        </div>
    );
};

export default Admin;