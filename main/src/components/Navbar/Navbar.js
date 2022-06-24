import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes["nav-bar"]}>
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/about'><h3>About</h3></Link>
            <h3>Description</h3>
        </div>
    );
}

export default Navbar;