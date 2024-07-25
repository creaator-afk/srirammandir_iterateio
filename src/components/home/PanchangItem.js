import React from "react";

const PanchangItem = ({src, title, description}) => (
    <div className="col-md-3 col-sm-6 feature-item">
        <img src={src} alt={title} className="img-fluid"/>
        <h4 className="col-12 text-center">{title}</h4>
        <p className="feature-description">{description}</p>
    </div>
);

export default PanchangItem;