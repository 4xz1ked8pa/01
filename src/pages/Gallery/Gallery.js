import React, {createClass} from 'react';
import './Gallery.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Paragraph from '../../components/Paragraph/Paragraph';
import Items from '../../components/Items/Items';
import Header from '../../components/Header/Header';

const Gallery = createClass({
    render() {
        return (
            <main id='gallery'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=', title: 'PROMOTING AGRICULTURE PROJECTS', description: 'Improve your environmental impact, an herb at a time'}} />
                    <div className='partners-list'>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/AsAuG5rSBtk?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/u0TzISRqtBY?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/bjWJO_RTwPQ?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>                           
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                 <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/n5ixK_rp0Vs?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>                           
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/qdhSyURWdZI?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>                           
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/-B7SI5iK3eE?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/qpWC0HsCkDM?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/eF2mXKSRwzw?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6vjAgdXPVy0?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='partner'>
                            <div className='partner-wrap'>
                                <img class="ratio" src="http://placehold.it/16x9"/>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xhyVBqud-BY?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Gallery;