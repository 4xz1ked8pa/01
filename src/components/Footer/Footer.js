import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Footer.css';

const Footer = createClass({
    render() {
        return (
            <div className='footer'>
                <div className='footer-items'>
                    <div className='page-links'>
                        <Link to={`/about`} className='page-link'>About</Link>
                        <Link to={`/clients`} className='page-link'>Clients</Link>
                        <Link to={`/services`} className='page-link'>Services</Link>
                        <Link to={`/gallery`} className='page-link'>Gallery</Link>
                        <Link to={`/shop`} className='page-link'>Shop</Link>
                        <Link to={`/partners`} className='page-link'>Partners</Link>
                        <Link to={`/contact`} className='page-link'>Contact</Link>
                        <Link to={`/fr/`} className='page-link'>Français</Link>
                    </div>
                    <div className='social-links'>
                        <a to={`https://www.facebook.com/microhabitatmtl/`} className='social-link'>
                            <img className='social-icon' src='https://www.placehold.it/25x25' />
                        </a>
                        <a to={`https://www.instagram.com/microhabitatmtl/`} className='social-link'>
                            <img className='social-icon' src='https://www.placehold.it/25x25' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

export default Footer;