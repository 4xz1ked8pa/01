import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Items.css';

const Items = createClass({
    render() {
        return (
            <ul className='items'>
                {
                    this.props.items.map((item) => {
                        return (
                            <li className='item'>
                                <img className='item-image' src={item.image} />
                                <h3 className='item-title'>{item.title}</h3>
                                <h3 className='item-description'>{item.description}</h3>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
});

export default Items;