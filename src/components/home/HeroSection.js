import React from 'react';
import {
    img_hero_artwork_en,
    img_playstore_logo,
    img_appstore_logo,
    img_achievement
} from '../../assets/imageResources';

const HeroSection = () => (
    <div className="row text-center text-md-start">
        <div className="col-md-6 left-column">
            <p className="caption"><img src={img_achievement} alt="Achievement"/> WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
            <h2>Pray daily with Sri Mandir. One App for all your devotional needs.</h2>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img src={img_playstore_logo} alt="playstore_logo"/>
                </div>
                <div className="col-md-6 text-center">
                    <img src={img_appstore_logo} alt="appstore_logo"/>
                </div>
            </div>
        </div>
        <div className="col-md-6 right-column">
            <img src={img_hero_artwork_en} alt="Big" className="img-fluid"/>
        </div>
    </div>
);

export default HeroSection;