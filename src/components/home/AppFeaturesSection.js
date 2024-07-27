import React from 'react';
import PropTypes from 'prop-types';
import {appFeatures} from './data';

const AppFeaturesSection = ({callbackfn}) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">One App for all your devotional needs</h3>
        <p className="feature-description text-center">Sri Mandir brings these amazing features for you, get these
            features for free and start your devotional journey now.</p>
        <div className="d-lg-flex flex-row overflow--auto horizontal-scroll" >
            {appFeatures.map(callbackfn)}
        </div>
    </div>
);

AppFeaturesSection.propTypes = {callbackfn: PropTypes.func};

export default AppFeaturesSection;