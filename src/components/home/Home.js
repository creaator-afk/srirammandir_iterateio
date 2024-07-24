import React from 'react';
import './Home.css';
import {
    img_hero_artwork_en,
    img_playstore_logo,
    img_appstore_logo,
    img_achievement
} from './imageResources';
import {features, pujas, outlets} from './data';
import FeatureItem from './FeatureItem';
import OutletItem from './OutletItem';
import PujaItem from './PujaItem';
import Banner from "./Banner";

const Home = () => (
    <div className="container home-container">
        <div className="row col-lg-">
            <div className="col-md-6 left-column">
                <p className="caption"><img src={img_achievement} alt="Achievement"/> WORLD’S LARGEST APP FOR HINDU
                    DEVOTEES</p>
                <h2>Pray daily with Sri Mandir. One App for all your devotional needs.</h2>
                <div className="row">
                    <div className="col-md-6 left-column">
                        <img src={img_playstore_logo} alt="playstore_logo"/>
                    </div>
                    <div className="col-md-6 right-column">
                        <img src={img_appstore_logo} alt="appstore_logo"/>
                    </div>
                </div>
            </div>
            <div className="col-md-6 right-column">
                <img src={img_hero_artwork_en} alt="Big" className="img-fluid"/>
            </div>
        </div>

        <div className="row new-section">
            <h3 className="col-12 text-center">Explore Sri Mandir</h3>
            {features.map((feature, index) => (
                <FeatureItem key={index} src={feature.src} description={feature.description}/>
            ))}
        </div>
        <div className="row new-section">
            <h3 className="col-12 text-center">Our Divine Mission recognised by Prominent Media Outlets</h3>
            {outlets.map((outlet, index) => (
                <OutletItem key={index} src={outlet.src}/>
            ))}
        </div>
        <div className="row new-section">
            <h3 className="col-12 text-center">Puja Seva for you and your loved ones</h3>
            <p className="feature-description">Book Pujas in your and your family's name at 1000+ renowned temples in
                India. You will also receive a video of the Puja and Prasad along with divine blessings.</p>
            <button className="btn btn-primary">View all puja</button>
            {pujas.map((puja, index) => (
                <PujaItem key={index} {...puja} />
            ))}
        </div>
        <div className="row new-section">
            <h3 className="col-12 text-center">Complete Panchang</h3>
            <p className="feature-description">Sri Mandir Panchang offers you all the important information about Tithi, Auspicious-Inauspicious timings, and upcoming fasts and festivals.</p>
            <button className="btn btn-primary">View detailed Panchang</button>
            {pujas.map((puja, index) => (
                <PujaItem key={index} {...puja} />
            ))}
        </div>

        <Banner/>

        <div className="row new-section">
            <h3 className="col-12 text-center">Reviews & Ratings</h3>
            <p className="feature-description">Read to what our beloved devotees have to say about Sri Mandir.</p>
            <button className="btn btn-primary">View all puja</button>
            {pujas.map((puja, index) => (
                <PujaItem key={index} {...puja} />
            ))}
        </div>
        <div className="row new-section">
            <h3 className="col-12 text-center">One App for all your devotional needs</h3>
            <p className="feature-description">Sri Mandir brings these amazing features for you, get these features for free and start your devotional journey now.</p>
            <button className="btn btn-primary">View all puja</button>
            {pujas.map((puja, index) => (
                <PujaItem key={index} {...puja} />
            ))}
        </div>
        <div className="row new-section">
            <h3 className="col-12 text-center">Read interesting articles about upcoming fasts, festivals, and everything
                around Sanatan Dharma.</h3>
            <p className="feature-description">Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</p>
            <button className="btn btn-primary">View all puja</button>
            {pujas.map((puja, index) => (
                <PujaItem key={index} {...puja} />
            ))}
        </div>
    </div>
);

export default Home;