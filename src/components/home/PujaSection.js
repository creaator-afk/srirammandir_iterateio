import React from 'react';
import PropTypes from 'prop-types';
import { pujas } from './data';

const PujaSection = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Puja Seva for you and your loved ones</h3>
        <p className="feature-description">Book Pujas in your and your family's name at 1000+ renowned temples in India. You will also receive a video of the Puja and Prasad along with divine blessings.</p>
        <button className="btn btn-primary">View all puja</button>
        {pujas.map(callbackfn)}
    </div>
);

PujaSection.propTypes = { callbackfn: PropTypes.func };

export default PujaSection;