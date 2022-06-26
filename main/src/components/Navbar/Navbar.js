import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes["nav-bar-links"]}>
            <Link to='/'><span>Home</span></Link>
            <Link to='/about'><span>About</span></Link>
            <Link to='/description'><span>Description</span></Link>
            <Link to='/users'><span>Users</span></Link>
        </div>
    );
}

export default Navbar;