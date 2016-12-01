import React, {createClass} from 'react';
import './Contact.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Paragraph from '../../components/Paragraph/Paragraph';
import Items from '../../components/Items/Items';
import Header from '../../components/Header/Header';

const Contact = createClass({
    render() {
        return (
            <main id='about'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/photo-1468408908883-029a25e230c1?dpr=2&auto=format&fit=crop&w=767&h=362&q=80&cs=tinysrgb&crop=', title: 'GET IN TOUCH', description: 'Feel free to contact our team anytime'}} />
 
                </div>
                <Footer />
            </main>
        );
    }
});

export default Contact;