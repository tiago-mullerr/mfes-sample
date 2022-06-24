import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        // <div className={classes["nav-bar"]}>
            <div className={classes["nav-bar-links"]}>
                <Link to='/'><span>Home</span></Link>
                <Link to='/about'><span>About</span></Link>
                <Link to='/blog'><span>Blog</span></Link>
                <Link to='/description'><span>Description</span></Link>
            </div>
        // </div>
    );
}

export default Navbar;