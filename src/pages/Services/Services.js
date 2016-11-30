import React, {createClass} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import './Services.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

let services = [
    {
        
    }
];

const Services = createClass({
    render() {
        return (
            <main id='services'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/photo-1438118907704-7718ee9a191a?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=', title: 'BECOME A PRODUCER', description: 'Nous simplifions la mise en marché des...'}} />
                    <Tabs onSelect={this.handleSelect} selectedIndex={0} className='site-side-tabs'>
                        <TabList>
                        {
                            services.map((service, index) => {
                                return (
                                    <Tab key={index}>{service.title}</Tab>
                                )
                            })
                        }
                        </TabList>
                        {
                            services.map((service, index) => {
                                return (
                                    <TabPanel key={index}>
                                        {index}
                                    </TabPanel>
                                )
                            })
                        }
                    </Tabs>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Services;