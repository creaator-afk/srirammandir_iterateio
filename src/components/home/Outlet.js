import React from 'react';
import PropTypes from 'prop-types';
import { outlets } from './data';
import OutletItem from './OutletItem';

const Outlet = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Our Divine Mission recognised by Prominent Media Outlets</h3>
        {outlets.map(callbackfn)}
    </div>
);

Outlet.propTypes = { callbackfn: PropTypes.func };

export default Outlet;