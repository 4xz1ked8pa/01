import React, {createClass} from 'react';
import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = createClass({
    render() {
        return (
            <main id='home'>
                <Navbar />
                <div className='center'>
                    <h3>Qu’est-ce qui pousse?</h3>
                    <h1>Microhabitat établit des projets d’agriculture urbaine pour les individus et les entreprises.</h1>
                    <h3>Participez au mouvement!</h3>
                    <button>LEARN MORE</button>
                </div>
                <iframe src="https://player.vimeo.com/video/167170153?autoplay=1&amp;loop=1&amp;byline=0&amp;title=0" frameborder="0"></iframe>
                <Footer />
            </main>
        );
    }
});

export default Home;