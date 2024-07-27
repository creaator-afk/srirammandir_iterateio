import React from 'react';
import './Home.css';
import FeatureItem from './FeatureItem';
import OutletItem from './OutletItem';
import PujaItem from './PujaItem';
import Banner from "./Banner";
import * as PropTypes from "prop-types";
import ArticleItem, {ArticlesSection} from "./ArticleItem";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import OutletSection from "./OutletSection";
import PujaSection from "./PujaSection";
import PanchangSection from "./PanchangSection";
import ReviewsSection from "./ReviewsSection";
import AppFeaturesSection from "./AppFeaturesSection";
import AppFeatureItem from "./AppFeatureItem";
import ReviewItem from "./ReviewItem";
import PanchangItem from "./PanchangItem";

FeaturesSection.propTypes = {prop: PropTypes.func};
OutletSection.propTypes = {callbackfn: PropTypes.func};
PujaSection.propTypes = {callbackfn: PropTypes.func};
PanchangSection.propTypes = {callbackfn: PropTypes.func};
ReviewsSection.propTypes = {callbackfn: PropTypes.func};
AppFeaturesSection.propTypes = {callbackfn: PropTypes.func};
ArticlesSection.propTypes = {callbackfn: PropTypes.func};

const Home = () => (<div className="container home-container">
        <HeroSection/>
        <FeaturesSection prop={(feature, index) => (<FeatureItem key={index} src={feature.src}
                                                                 description={feature.description}/>)}/>
        <OutletSection callbackfn={(outlet, index) => (<OutletItem key={index} src={outlet.src}/>)}/>
        <PujaSection callbackfn={(puja, index) => (<PujaItem key={index} {...puja} />)}/>
        <PanchangSection callbackfn={(puja, index) => (<PanchangItem key={index} {...puja} />)}/>
        <Banner/>
        <ReviewsSection callbackfn={(review, index) => (<ReviewItem key={index} {...review} />)}/>
        <AppFeaturesSection callbackfn={(app, index) => (<AppFeatureItem key={index} {...app} />)}/>
        <ArticlesSection callbackfn={(articles, index) => (<ArticleItem key={index} {...articles} />)}/>
    </div>);

export default Home;