import React, {createClass} from 'react';
import './Partners.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Paragraph from '../../components/Paragraph/Paragraph';
import Items from '../../components/Items/Items';
import Header from '../../components/Header/Header';

let partners = [
    {
        image: 'https://i.imgsafe.org/009d3aa3c9.png',
        title: 'Alvéole',
        description: 'Apiculture',
        link: 'https://www.alveole.buzz/en/'
    },
    {
        image: 'https://i.imgsafe.org/009d483e39.png',
        title: 'Malo',
        description: 'Videography',
        link: 'https://vimeo.com/silverstag'
    },
    {
        image: 'https://i.imgsafe.org/009d567092.png',
        title: 'Charles Massicolli',
        description: 'Photography',
        link: 'http://www.massicolli.com/'
    },
    {
        image: 'https://i.imgsafe.org/009d7ba9dd.png',
        title: 'Maude Arès',
        description: 'Illustration',
        link: 'http://www.maudeares.com/'
    },
    {
        image: 'https://i.imgsafe.org/009d75cf50.png',
        title: 'PUPIK',
        description: 'Mycoculture',
        link: 'http://www.pupik.ca/index.html/'
    }
];

const Partners = createClass({
    render() {
        return (
            <main id='partners'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=', title: 'FOR A BETTER FUTURE', description: 'A network of partners dedicated to changing the urban landscape'}} />
                    <div className='partners-list'>
                        {
                            partners.map((partner) => {
                                return (
                                    <a className='partner-item' href='#'>
                                        <img src={partner.image} />
                                        <h1>{partner.title}</h1>
                                        <h3>{partner.description}</h3>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Partners;