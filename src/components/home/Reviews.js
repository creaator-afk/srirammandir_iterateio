import React from 'react';
import PropTypes from 'prop-types';
import { reviews } from './data';

const Reviews = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Reviews & Ratings</h3>
        <p className="feature-description">Read to what our beloved devotees have to say about Sri Mandir.</p>
        {reviews.map(callbackfn)}
    </div>
);

Reviews.propTypes = { callbackfn: PropTypes.func };

export default Reviews;