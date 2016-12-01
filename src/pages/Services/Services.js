import React, {createClass} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import './Services.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import {PanelTitle, PanelDescription, PanelList, PanelNote, PanelSubtitle} from '../../components/Panels/Panels';
import {ButtonPassive} from '../../components/Buttons/Buttons';

let services = [
    {
        title: 'Overview'    
    },
    {
        title: 'Residential'   
    },
    {
        title: 'Restaurant'    
    },
    {
        title: 'Business' 
    },
    {
        title: 'Requirements'    
    },
    {
        title: 'Production'
    }
];

const Services = createClass({
    render() {
        return (
            <main id='services'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/photo-1438118907704-7718ee9a191a?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=', title: 'BECOME A PRODUCER', description: 'Making it easy for people to develop urban agriculture projects'}} />
                    <Tabs onSelect={this.handleSelect} selectedIndex={0} className='side-tabs'>
                        <TabList>
                        {
                            services.map((service, index) => {
                                return (
                                    <Tab key={index}>{service.title}</Tab>
                                );
                            })
                        }
                        </TabList>
                        <TabPanel section='overview'>
                            <PanelTitle title='Our services' />
                            <PanelDescription description= 'MicroHabitat is a first step towards a sustainable lifestyle in the comfort of your own home or office space. Fresh produce available to you, steps away from your doorstep, without having to lift a finger.' />
                            <PanelList list={[
                                'We plan and customize your garden to offer you your favourite selection of fruits, vegetables, herbs and edible flowers. Choose from our wide array of ecological, rustic and tasty varieties.',
                                'We install the garden. In a yard, on a balcony or on a rooftop. We add an automated watering system.',
                                'We maintain the garden on a weekly basis.',
                                'We harvest and deliver all the produce to your doorstep or office desk.',
                                'We can add a beehive to your garden and do the harvesting for you with the help of our sister company specialized in apiculture.'
                            ]} />
                        </TabPanel>
                        <TabPanel section='residential'>
                            <PanelTitle title='Homes' />
                            <PanelDescription description='Enjoy fresh and ecological veggies, herbs, and edible flowers on a daily basis.' />
                            <ButtonPassive label='Apply for a free consultation today' link='mailto:contact@microhabitatmtl.com' />
                            <PanelNote note={{
                                title:'Want to do it yourself?',
                                description:'We offer materials and workshops necessary for the implementation of urban agriculture projects.',
                                link: {
                                    label: 'Visit our shop',
                                    path: 'https://www.shopify.com/'
                                }
                            }} />
                        </TabPanel>
                        <TabPanel section='restaurants'>
                            <PanelTitle title='Restaurants' />
                            <PanelDescription description='Enjoy a personalised production of fresh ecological and local vegetables, herbs, and edible flowers. Our wide array of ancestral and rare varieties will give you an edge and will bring an added value to your restaurants edible creations.' />
                            <ButtonPassive label='Apply for a free consultation today' link='mailto:contact@microhabitatmtl.com' />
                            <PanelNote note={{
                                title:'Want to do it yourself?',
                                description:'We offer materials and workshops necessary for the implementation of urban agriculture projects.',
                                link: {
                                    label: 'Visit our shop',
                                    path: 'https://www.shopify.com/'
                                }
                            }} />
                        </TabPanel>
                        <TabPanel section='business'>
                            <PanelTitle title='Schools, Businesses & Institutions' />
                            <PanelDescription description='Enjoy a personalised production of fresh ecological and local vegetables, herbs, and edible flowers. Our wide array of ancestral and rare varieties will give you an edge and will bring an added value to your restaurants edible creations.' />
                            <PanelList list={[
                                'Your institution can benefit from an urban garden improving the quality of life of its members.',
                                'You want to help your community? Donate fresh produce from your garden to local food banks.',
                                'Add workshops to your agenda and discover the various facets of your project. From planting to processing and preserving, our farmers and chefs will model each session to your needs.'
                            ]} />
                            <ButtonPassive label='Apply for a free consultation today' link='mailto:contact@microhabitatmtl.com' />
                        </TabPanel>
                        <TabPanel section='requirements'>
                            <PanelTitle title='With our service payback your investment within two seasons' />
                            <PanelSubtitle subtitle='Estimate your future production through the success of our clients.' />
                            <PanelDescription description='Here is a real life example of the amount of food grown by one of our clients with a garden  of 20 pots, during the 2016 summer season.' />
                        </TabPanel>
                        <TabPanel section='production'>
                            6
                        </TabPanel>
                    </Tabs>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Services;