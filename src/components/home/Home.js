import React from 'react';
import './Home.css';
import FeatureItem from './FeatureItem';
import OutletItem from './OutletItem';
import PujaItem from './PujaItem';
import Banner from "./Banner";
import * as PropTypes from "prop-types";
import ArticleItem, {Articles} from "./ArticleItem";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Outlet from "./Outlet";
import Puja from "./Puja";
import Panchang from "./Panchang";
import Reviews from "./Reviews";
import AppFeatures from "./AppFeatures";
import AppFeatureItem from "./AppFeatureItem";
import ReviewItem from "./ReviewItem";
import PanchangItem from "./PanchangItem";

Features.propTypes = {prop: PropTypes.func};
Outlet.propTypes = {callbackfn: PropTypes.func};
Puja.propTypes = {callbackfn: PropTypes.func};
Panchang.propTypes = {callbackfn: PropTypes.func};
Reviews.propTypes = {callbackfn: PropTypes.func};
AppFeatures.propTypes = {callbackfn: PropTypes.func};
Articles.propTypes = {callbackfn: PropTypes.func};

const Home = () => (<div className="container home-container">
        <HeroSection/>
        <Features prop={(feature, index) => (<FeatureItem key={index} src={feature.src}
                                                          description={feature.description}/>)}/>
        <Outlet callbackfn={(outlet, index) => (<OutletItem key={index} src={outlet.src}/>)}/>
        <Puja callbackfn={(puja, index) => (<PujaItem key={index} {...puja} />)}/>
        <Panchang callbackfn={(puja, index) => (<PanchangItem key={index} {...puja} />)}/>
        <Banner/>
        <Reviews callbackfn={(review, index) => (<ReviewItem key={index} {...review} />)}/>
        <AppFeatures callbackfn={(app, index) => (<AppFeatureItem key={index} {...app} />)}/>
        <Articles callbackfn={(articles, index) => (<ArticleItem key={index} {...articles} />)}/>
    </div>);

export default Home;