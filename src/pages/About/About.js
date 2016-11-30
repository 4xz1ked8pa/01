import React, {createClass} from 'react';
import './About.css';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Paragraph from '../../components/Paragraph/Paragraph';
import Items from '../../components/Items/Items';
import Header from '../../components/Header/Header';

import profile_alexandre from '../../assets/images/team/alexandre-ferrari-roy.jpg';
import profile_orlane from '../../assets/images/team/orlane-panet-gigon.jpg';

let members = [
    {
        image: profile_alexandre,
        title: 'Alexandre Ferrari'
    },
    {
        image: profile_orlane,
        title: 'Orlane Panet-Gigon'
    }
];

const About = createClass({
    render() {
        return (
            <main id='about'>
                <Navbar />
                <div className='section'>
                    <Banner banner={{image: 'https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?dpr=2&auto=format&fit=crop&w=767&h=509&q=80&cs=tinysrgb&crop=', title: 'AGRICULTURE & APICULTURE', description: 'Urban farmers and beekeepers working together for a greener city.'}} />
                    <Paragraph paragraph='After his studies in environmental and agricultural sciences, Alexandre launched MicroHabitat by partnering with Alvéole, a local apiculture organization, to pursue the path of growing food locally for people living in urban settings.' />
                    <Paragraph paragraph='MicroHabitat aims to continuously better conventional urban settings by combining agriculture and apiculture to form synergistic and ecological urban food production schemes that are efficient and beneficial for both city dwellers and businesses. Our installations considerably impact the environment in positive ways, by filling unused spaces with plants, enhancing the city’s biodiversity and beauty.' />
                    <Paragraph paragraph='At MicroHabitat, we intent to change the current perception that the population has of the food production industry. We want to decrease energy waste associated with the transport of agricultural products, as well as other forms of pollution resulting from the exhaustion of agrarian lands. We also aim to offer an alternative to processed foods, which lack the essential nutrients our bodies need to thrive. MicroHabitat is an opportunity for the population to take a step away from the current food industry and embrace a system that is based on sustainable development and urban space optimization.' />
                    <div className='h_iframe'>
                        <img class="ratio" src="http://placehold.it/16x9"/>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/qdhSyURWdZI?autoplay=0&showinfo=0&controls=0" frameborder="0" allowfullscreen>" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <Header header={{title: 'Co-Founders'}} />
                    <Items items={members} />
                </div>
                <Footer />
            </main>
        );
    }
});

export default About;