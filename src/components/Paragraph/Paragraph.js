import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Paragraph.css';

const Paragraph = createClass({
    render() {
        return (
            <p className='paragraph'>
                {this.props.paragraph}
            </p>
        );
    }
});

export default Paragraph;