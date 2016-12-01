import React, {createClass} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import './Gardens.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import {PanelTitle, PanelDescription, PanelList, PanelNote, PanelSubtitle, PanelImage} from '../../components/Panels/Panels';
import {ButtonPassive} from '../../components/Buttons/Buttons';

let gardens = [
    {title: 'Park'},
    {title: 'Alvéole Lab'},
    {title: 'Rouge Gorge'},
    {title: 'Mingus Software'},
    {title: 'Christine'}
];

const Gardens = createClass({
    render() {
        return (
            <main id='services'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/photo-1437750635120-f98648c0fe03?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=', title: 'AGRICULTURE & APICULTURE', description: 'Bringing life to rooftops by growing food for our clients.'}} />
                    <Tabs onSelect={this.handleSelect} selectedIndex={0} className='side-tabs'>
                        <TabList>
                        {
                            gardens.map((service, index) => {
                                return (
                                    <Tab key={index}>{service.title}</Tab>
                                );
                            })
                        }
                        </TabList>
                        <TabPanel>
                            <PanelTitle title='Park' />
                            <PanelDescription description= 'Park Resto has redefined dining by taking farm-to-table to a whole new level. This Montreal restaurant combines Japanese and Argentinian "parilla" style cuisine where Chef Antonio Park features the freshest ingredients in his dishes. By working with us, Park Resto is able to source a variety of vegetables, flowers, herbs, microgreens and honey from their very own rooftop garden used in both food and drinks.' />
                            <PanelImage image='https://i.imgsafe.org/fa4c355479.jpg' />
                        </TabPanel>
                        <TabPanel>
                            <PanelTitle title='Alvéole Lab' />
                            <PanelDescription description={`A collaboration with our sister company, Alvéole, has enabled us to implement a common food production space right in downtown Montreal. This urban agricultural area combines the strengths of beekeepers as well as urban farmers and is dedicated to food production, research and education. To date, two restaurants use the food that is grown at the Lab Alvéole: Liv Salads and Bleu Raisin. We grow fruits, vegetables, herbs, edible flowers, honey and even mushrooms intensively using very little space. The food is shipped directly to the restaurants on a weekly basis by foot. For the cultivation of our veggies, fruits and herbs, we use ecological farming techniques. No pesticides or inorganic fertilizers are ever applied. This year this production space has allowed us to generate approximately 5000$ worth of fresh food while improving the ecosystem of our city. With this initiative, we want to promote the local economy and demonstrate that it is possible to stimulate the city's economy without having a negative impact on the environment.`} />
                            <PanelImage image='https://i.imgsafe.org/fa4bc96c21.jpg' />
                        </TabPanel>
                        <TabPanel>
                            <PanelTitle title='Rouge Gorge' />
                            <PanelDescription description={`Located in the heart of the Plateau Mont-Royal, Rouge Gorge is a unique wine bar. With an elaborate wine and food menu, all can look forward to a glass of privately imported wine accompanied with seasonal dishes. Through the implementation of an intensive food production system on their rooftop, the chefs of the Rouge Gorge can now access fresh produce on a daily basis. The Rouge Gorge, with the help of Chef André Medina, have combined innovative concepts to give you an unparallelled sensorial experience. Since then, the restaurant has decreased its carbon footprint while increasing the freshness of the food they use to make their dishes.`} />
                            <PanelImage image='https://i.imgsafe.org/fa4c06243a.jpg' />
                        </TabPanel>
                        <TabPanel>
                            <PanelTitle title='Mingus Software' />
                            <PanelDescription description={`Mingus software, a company that specializes in the development of online management platforms, benefits from urban farming. Mingus believes that it is important for their employees to have access to green spaces, as well as fresh vegetables, herbs and honey. Their employees can access the urban gardens on a regular basis, allowing them to leave work with food from their company garden.`} />
                            <PanelImage image='https://i.imgsafe.org/fa4be43e2a.jpg' />
                        </TabPanel>
                        <TabPanel>
                            <PanelTitle title='Christine' />
                            <PanelDescription description={`Christine has devoted many years to building the perfect home. She has mastered the art of architecture, bringing new life to old structures. Microhabitat has elevated Christine's home to a new level by teaching her how to grow and maintain a garden full of vegetables, herbs and honey that always excites her taste buds!`} />
                            <PanelImage image='https://i.imgsafe.org/fa4bd4a2ee.jpg' />
                        </TabPanel>
                    </Tabs>
                </div>
                <Footer />
            </main>
        );
    }
});

export default Gardens;