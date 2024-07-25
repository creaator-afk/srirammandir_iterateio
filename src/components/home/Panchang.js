import React from 'react';
import PropTypes from 'prop-types';
import { pujas } from './data';
import PujaItem from './PujaItem';

const Panchang = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Complete Panchang</h3>
        <p className="feature-description">Sri Mandir Panchang offers you all the important information about Tithi, Auspicious-Inauspicious timings, and upcoming fasts and festivals.</p>
        <button className="btn btn-primary">View detailed Panchang</button>
        {pujas.map(callbackfn)}
    </div>
);

Panchang.propTypes = { callbackfn: PropTypes.func };

export default Panchang;