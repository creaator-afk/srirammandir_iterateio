import React from "react";

const ReviewItem = ({src, name, location, review}) => (
    <div className="col-md-3 col-sm-6 feature-item">
        <img src={src} alt={name} className="img-fluid"/>
        <p className="feature-description text-center">{review}</p>
        <h4 className="col-12 text-center">{name}</h4>
        <p className="feature-description">{location}</p>
    </div>
);

export default ReviewItem;