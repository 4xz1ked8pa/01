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
        image: '',
        title: 'Alexandre Ferrari',
        description: 'Founder'
    },
    {
        image: '',
        title: 'Orlane Panet-Gigon',
        description: 'Co-founder'
    }
];

const Partners = createClass({
    render() {
        return (
            <main id='partners'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=', title: 'FOR A BETTER FUTURE', description: 'A network of partners dedicated to changing the urban landscape'}} />
                    <ul className='partners-list'>
                        <li className='partner-item'>
                        
                        </li>
                    </ul>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Partners;