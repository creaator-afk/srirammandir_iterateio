import React from 'react';
import './Banner.css';
import { features } from './data';

const Banner = () => (
    <div className="banner-container">
        <div className="row ">
            <div className="col-md-6 row-cols-md-auto banner-left">
                <p className="caption">Trusted by Over 20 Million Devotees in India and 100,000+ NRIs.</p>
                <h2>India's Most Loved Devotional App</h2>
                <p>We are on a mission to assist a billion Indians in their spiritual and devotional journey and guide them on the path towards feeling happy, peaceful, and content.</p>
            </div>
            <div className="col-md-6 banner-right">
                <div className="row">
                    {features.slice(0, 2).map((feature, index) => (
                        <div className="col-md-6 feature-item" key={index}>
                            <img src={feature.src} alt={feature.description} className="feature-icon" />
                            <h4>{feature.description}</h4>
                            <p>Feature description goes here.</p>
                        </div>
                    ))}
                </div>
                <div className="row">
                    {features.slice(2, 4).map((feature, index) => (
                        <div className="col-md-6 feature-item" key={index}>
                            <img src={feature.src} alt={feature.description} className="feature-icon" />
                            <h4>{feature.description}</h4>
                            <p>Feature description goes here.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Banner;