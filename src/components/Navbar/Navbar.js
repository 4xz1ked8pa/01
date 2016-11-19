import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Navbar.css';

import logo from '../../assets/img/logos/logo.png';

const Navbar = createClass({
    render() {
        var classes = 'navbar-home';
        return (
            <div className={`${classes}`}>
                <Link to={`/about`} className='navbar-link'>About</Link>
                <Link to={`/clients`} className='navbar-link'>Clients</Link>
                <Link to={`/services`} className='navbar-link'>Services</Link>
                <Link to={`/gallery`} className='navbar-link'>Gallery</Link>
                <Link to={`/`}>
                    <img src={`${logo}`} className='navbar-logo'/>
                </Link>
                <Link to={`/shop`} className='navbar-link'>Shop</Link>
                <Link to={`/partners`} className='navbar-link'>Partners</Link>
                <Link to={`/contact`} className='navbar-link'>Contact</Link>
                <Link to={`/fr/`} className='navbar-link'>Français</Link>
            </div>
        );
    }
});

export default Navbar;