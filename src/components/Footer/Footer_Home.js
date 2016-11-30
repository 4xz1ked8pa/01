import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Footer.css';

const Footer = createClass({
    render() {
        return (
            <div className='footer-home'>
                <Link to={`/about`} className='footer-link'>About</Link>
                <Link to={`/clients`} className='footer-link'>Clients</Link>
                <Link to={`/services`} className='footer-link'>Services</Link>
                <Link to={`/gallery`} className='footer-link'>Gallery</Link>
                <Link to={`/shop`} className='footer-link'>Shop</Link>
                <Link to={`/partners`} className='footer-link'>Partners</Link>
                <Link to={`/contact`} className='footer-link'>Contact</Link>
                <Link to={`/fr/`} className='footer-link'>Français</Link>
            </div>
        );
    }
});

export default Footer;