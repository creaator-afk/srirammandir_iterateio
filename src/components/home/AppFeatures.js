import React from 'react';
import PropTypes from 'prop-types';
import { pujas } from './data';
import PujaItem from './PujaItem';

const AppFeatures = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">One App for all your devotional needs</h3>
        <p className="feature-description">Sri Mandir brings these amazing features for you, get these features for free and start your devotional journey now.</p>
        <button className="btn btn-primary">View all puja</button>
        {pujas.map(callbackfn)}
    </div>
);

AppFeatures.propTypes = { callbackfn: PropTypes.func };

export default AppFeatures;