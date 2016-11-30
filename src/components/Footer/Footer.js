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
                        <Link to={`/services`} className='page-link'>Services</Link>
                        <a href='https://www.shopify.com/' className='navbar-link'>Shop</a>
                        <Link to={`/gardens`} className='page-link'>Gardens</Link>
                        <Link to={`/partners`} className='page-link'>Partners</Link>
                        <Link to={`/gallery`} className='page-link'>Gallery</Link>
                        <Link to={`/contact`} className='page-link'>Contact</Link>
                        <Link to={`/fr/`} className='page-link'>Français</Link>
                    </div>
                    <div className='social-links'>
                        <a href='https://www.facebook.com/microhabitatmtl/' className='social-link fa fa-facebook'></a>
                        <a href='https://www.instagram.com/microhabitatmtl/' className='social-link fa fa-instagram'></a>
                    </div>
                </div>
            </div>
        );
    }
});

export default Footer;