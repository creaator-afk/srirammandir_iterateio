import React from 'react';

const OutletItem = ({ src }) => (
    <div className="col-md-3 col-sm-6 outlet-item">
        <img src={src} alt="OutletSection" className="img-fluid" />
    </div>
);

export default OutletItem;