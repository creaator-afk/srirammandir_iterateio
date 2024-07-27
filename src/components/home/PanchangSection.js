import React from 'react';
import PropTypes from 'prop-types';
import { panchnag } from './data';

const PanchangSection = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Complete Panchang</h3>
        <p className="feature-description">Sri Mandir Panchang offers you all the important information about Tithi, Auspicious-Inauspicious timings, and upcoming fasts and festivals.</p>
        <button className="btn btn-light">View detailed Panchang</button>
        {panchnag.map(callbackfn)}
    </div>
);

PanchangSection.propTypes = { callbackfn: PropTypes.func };

export default PanchangSection;