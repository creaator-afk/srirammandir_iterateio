import React from 'react';

const FeatureItem = ({ src, description }) => (
    <div className="col-md-3 col-sm-6 feature-item">
        <img src={src} alt={description} className="img-fluid" />
        <p className="feature-description">{description}</p>
    </div>
);

export default FeatureItem;