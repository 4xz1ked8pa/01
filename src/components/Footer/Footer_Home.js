import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Footer.css';

const Footer = createClass({
    render() {
        return (
            <div className='footer-home'>
                <a href='https://www.facebook.com/microhabitatmtl/' target='_blank' className='footer-link fa fa-facebook'></a>
                <a  href='https://www.instagram.com/microhabitatmtl/' target='_blank' className='footer-link fa fa-instagram'></a>
                <a href='https://www.youtube.com/channel/UC2b2oLw3wSmH5azWjALI7Ig' target='_blank' className='footer-link fa fa-youtube'></a>
                <a href='https://twitter.com/microhabitatmtl' target='_blank' className='footer-link fa fa-twitter'></a>
            </div>
        );
    }
});

export default Footer;