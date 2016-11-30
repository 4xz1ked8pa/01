import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Header.css';

const Header = createClass({
    render() {
        return (
            <header className='header'>
                <h1 className='header-title'>
                    {this.props.header.title}
                </h1>
            </header>
        );
    }
});

export default Header;