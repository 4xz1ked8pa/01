import React, {createClass} from 'react';
import {Link} from 'react-router';
import './Panels.css';

/* Panel Title */
export const PanelTitle = createClass({
    render() {
        return (
            <h1 className='panel-title'>
                {this.props.title}
            </h1>
        );
    }
});

/* Panel Subtitles */
export const PanelSubtitle = createClass({
    render() {
        return (
            <p className='panel-subtitle'>
                {this.props.subtitle}
            </p>
        );
    }
});

/* Panel Description */
export const PanelDescription = createClass({
    render() {
        return (
            <h1 className='panel-description'>
                {this.props.description}
            </h1>
        );
    }
});

/* Panel List */
export const PanelList = createClass({
    render() {
        return (
            <ul className='panel-list'>
                {
                    this.props.list.map((item) => {
                        return (
                            <li className='list-item'>{item}</li>
                        );
                    })
                }
            </ul>
        );
    }
});

/* Panel Note */
export const PanelNote = createClass({
    render() {
        return (
            <div className='panel-note'>
                <h1 className='note-title'>{this.props.note.title}</h1>
                <p className='note-description'>
                    {`${this.props.note.description}`} <Link className='note-link' to={this.props.note.link.path}>{this.props.note.link.label}</Link>
                </p>
            </div>
        );
    }
});

/* Panel Image */
export const PanelImage = createClass({
    render() {
        return (
            <div className='panel-image'>
                <img src={this.props.image} />
                <div className='image-overlay'></div>
            </div>
        );
    }
});

