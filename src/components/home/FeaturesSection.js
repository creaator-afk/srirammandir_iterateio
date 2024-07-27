import React from 'react';
import PropTypes from 'prop-types';
import { features } from './data';
import FeatureItem from './FeatureItem';

const FeaturesSection = ({ prop }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Explore Sri Mandir</h3>
        {features.map(prop)}
    </div>
);

FeaturesSection.propTypes = { prop: PropTypes.func };

export default FeaturesSection;