import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Buttons.css';

/* Button Action */
export const ButtonPassive = createClass({
    render() {
        return (
            <a href={this.props.link} className='button button-passive'>
                {this.props.label}
            </a>
        );
    }
});