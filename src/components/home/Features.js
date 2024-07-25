import React from 'react';
import PropTypes from 'prop-types';
import { features } from './data';
import FeatureItem from './FeatureItem';

const Features = ({ prop }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Explore Sri Mandir</h3>
        {features.map(prop)}
    </div>
);

Features.propTypes = { prop: PropTypes.func };

export default Features;