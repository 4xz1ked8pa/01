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
            <main id='contact'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/photo-1468408908883-029a25e230c1?dpr=2&auto=format&fit=crop&w=767&h=362&q=80&cs=tinysrgb&crop=', title: 'GET IN TOUCH', description: 'Feel free to contact our team anytime'}} />
                    <div className='contact-details'>
                        <div className='contact-side'>
                            <h1 className='side-title'>Microhabitat</h1>
                            <h1 className='side-subtitle'>7154 Rue St-Urbain</h1>
                            <h1 className='side-subtitle'>Montréal, QC, H2S 3H5</h1>
                            <h1 className='side-subtitle'>(514) 942-6573</h1>
                            <h1 className='side-subtitle'>microhabitatmtl@gmail.com</h1>
                            <h1 className='side-subtitle'>Monday to Friday</h1>
                            <h1 className='side-subtitle'>9:00AM to 5:00PM</h1>
                            <iframe className='contact-geo' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.8559044965414!2d-73.62103298444019!3d45.533105179101895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9191270c075e5%3A0x321f0119a630b6ad!2s7154+Rue+Saint-Urbain%2C+Montr%C3%A9al%2C+QC+H2S%2C+Canada!5e0!3m2!1sen!2sie!4v1480645289602" width="227" height="227" frameborder="0" style={{border:'none'}} allowfullscreen></iframe>
                        </div>
                        <form className='contact-send'>
                            <label className='send-select-label'>
                                <select className='send-select'>
                                    <option>Apply for a quote</option>
                                    <option>Apply for an internship</option>
                                    <option>Apply for a Job</option>
                                    <option>Request information</option>
                                </select>
                            </label>
                            <input className='input-box' placeholder='Full name' />
                            <input className='input-box' placeholder='Organization ' />
                            <input className='input-box' placeholder='Telephone ' />
                            <input className='input-box' placeholder='Email ' />
                            <textarea className='input-area' placeholder='Organization '>

                            </textarea>
                        </form>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Contact;