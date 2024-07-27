import React from 'react';

const FeatureItem = ({ src, description }) => (
    <div className="col-4 col-md-auto feature-item d-flex flex-column">
        <img src={src} alt={description} className="img-fluid w-100" />
        <p className="feature-description mt-auto">{description}</p>
    </div>
);

export default FeatureItem;