import React, {createClass} from 'react';
import './About.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

const About = createClass({
    render() {
        return (
            <main id='about'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/photo-1471509117934-096ee308cbf2?dpr=2&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=', title: 'AGRICULTURE & APICULTURE', description: 'Urban farmers and beekeepers working together for a greener city.'}} />
                </div>
                <Footer />
            </main>
        );
    }
});

export default About;