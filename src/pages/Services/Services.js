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
                            <PanelTitle title='Requirements needed for a garden' />
                            <PanelDescription description='The space must have: A water outlet is needed to power the irrigation system throughout the harvest season (required for all ground level and rooftop gardens). Specifically for a rooftop garden:' />
                            <PanelList list={[
                                'A safe staircase to access to the rooftop.',
                                'A rooftop without damage (no signs of membrane or structure deterioration).'
                            ]} />
                            <ButtonPassive label='Apply for a free consultation today' link='mailto:contact@microhabitatmtl.com' />
                        </TabPanel>
                        <TabPanel section='production'>
                            <PanelTitle title='With our service payback your investment within two seasons' />
                            <PanelDescription description='Estimate your future production through the success of our clients. Here is a real life example of the amount of food grown by one of our clients with a garden  of 20 pots, during the 2016 summer season.' />
                            <div className='requirements-table'>
                                <h1 className='table-title'>20 POT GARDEN 2016 SEASON</h1>
                                <ul className='table-sections'>
                                    <li className='table-section'>
                                        <header className='section-header'>
                                            <div className='table-cell'>HERBS</div>
                                            <div className='table-cell'>QTY (BOUQUET)</div>
                                            <div className='table-cell'>ECONOMIES</div>   
                                        </header>
                                        <ul className='section-values'>
                                            <li className='section-row'>
                                                <div className='table-cell'>BASIL</div>
                                                <div className='table-cell'>38</div>
                                                <div className='table-cell'>76</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>ROSEMARY</div>
                                                <div className='table-cell'>15</div>
                                                <div className='table-cell'>30</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>TARRAGON</div>
                                                <div className='table-cell'>8</div>
                                                <div className='table-cell'>16</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>AGASTACHE</div>
                                                <div className='table-cell'>15</div>
                                                <div className='table-cell'>30</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>NASTURTIUM</div>
                                                <div className='table-cell'>38</div>
                                                <div className='table-cell'>76</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>MINT</div>
                                                <div className='table-cell'>28</div>
                                                <div className='table-cell'>56</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>CHIVES</div>
                                                <div className='table-cell'>15</div>
                                                <div className='table-cell'>30</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>SAGE</div>
                                                <div className='table-cell'>12</div>
                                                <div className='table-cell'>24</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>CAMOMILLE</div>
                                                <div className='table-cell'>15</div>
                                                <div className='table-cell'>30</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>VERBENA</div>
                                                <div className='table-cell'>15</div>
                                                <div className='table-cell'>30</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>BALM</div>
                                                <div className='table-cell'>22</div>
                                                <div className='table-cell'>44</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>HERBS</div>
                                                <div className='table-cell'>221</div>
                                                <div className='table-cell'>442</div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='table-section'>
                                        <header className='section-header'>
                                            <div className='table-cell'>PRODUCT</div>
                                            <div className='table-cell'>QTY (BOUQUET)</div>
                                            <div className='table-cell'>ECONOMIES ($)</div>   
                                        </header>
                                        <ul className='section-values'>
                                            <li className='section-row'>
                                                <div className='table-cell'>LETTUCE</div>
                                                <div className='table-cell'>14 HEADS</div>
                                                <div className='table-cell'>30</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>GREEN PEPPER</div>
                                                <div className='table-cell'>30 KG</div>
                                                <div className='table-cell'>53</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>ONION</div>
                                                <div className='table-cell'>10 KG</div>
                                                <div className='table-cell'>39</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>CABBAGE</div>
                                                <div className='table-cell'>148 LEAVES</div>
                                                <div className='table-cell'>25</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>BANANA PEPPER</div>
                                                <div className='table-cell'>20 FRUITS</div>
                                                <div className='table-cell'>12.3</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>BLACK C. TOMATO</div>
                                                <div className='table-cell'>27.5 KG</div>
                                                <div className='table-cell'>303</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>RED C. TOMATO</div>
                                                <div className='table-cell'>10 KG</div>
                                                <div className='table-cell'>110</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>YELLOW PEPPER</div>
                                                <div className='table-cell'>10 FRUITS</div>
                                                <div className='table-cell'>9</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>HABANEROS PEPPER</div>
                                                <div className='table-cell'>15 FRUITS</div>
                                                <div className='table-cell'>13</div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'></div>
                                                <div className='table-cell'></div>
                                                <div className='table-cell'></div>
                                            </li>
                                            <li className='section-row'>
                                                <div className='table-cell'>VEGETABLES</div>
                                                <div className='table-cell'></div>
                                                <div className='table-cell'>594.3</div>
                                            </li>
                                            <li className='section-row section-total'>
                                                <div className='table-cell'>TOTAL ECONOMIES</div>
                                                <div className='table-cell'></div>
                                                <div className='table-cell'>1036.3</div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Services;