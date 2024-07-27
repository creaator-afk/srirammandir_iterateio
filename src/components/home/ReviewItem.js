import React from "react";

const ReviewItem = ({ src, name, location, review }) => (
    <div className="col-12 col-md-3 col-sm-6 outlet-item m-2">
        <div className="d-flex justify-content-center">
            <div className="d-flex rounded-circle overflow-hidden align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                <img src={src} alt={name} className="img-fluid" />
            </div>
        </div>
        <p className="feature-description text-center text-wrap">{review}</p>
        <h4 className="col-12 text-center">{name}</h4>
        <p className="feature-description">{location}</p>
    </div>
);

export default ReviewItem;