import React, {createClass} from 'react';
import './About.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const About = createClass({
    render() {
        return (
            <main id='about'>
                <Navbar />

                <Footer />
            </main>
        );
    }
});

export default About;