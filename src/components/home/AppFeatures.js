import React from 'react';
import PropTypes from 'prop-types';
import { appFeatures } from './data';

const AppFeatures = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">One App for all your devotional needs</h3>
        <p className="feature-description">Sri Mandir brings these amazing features for you, get these features for free and start your devotional journey now.</p>
        {appFeatures.map(callbackfn)}
    </div>
);

AppFeatures.propTypes = { callbackfn: PropTypes.func };

export default AppFeatures;