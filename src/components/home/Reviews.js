import React from 'react';
import PropTypes from 'prop-types';
import { pujas } from './data';
import PujaItem from './PujaItem';

const Reviews = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Reviews & Ratings</h3>
        <p className="feature-description">Read to what our beloved devotees have to say about Sri Mandir.</p>
        <button className="btn btn-primary">View all puja</button>
        {pujas.map(callbackfn)}
    </div>
);

Reviews.propTypes = { callbackfn: PropTypes.func };

export default Reviews;