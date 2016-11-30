import React, {createClass} from 'react';
import './Banner.css';

const Banner = createClass({
    render() {
        return (
            <div className='banner' style={{backgroundImage: `url(${this.props.banner.image})`}}>
                <h1 className='banner-title'>{this.props.banner.title}</h1>
                <h2 className='banner-description'>{this.props.banner.description}</h2>
                <div className='banner-filter'></div>
            </div>
        );
    }
});

export default Banner;