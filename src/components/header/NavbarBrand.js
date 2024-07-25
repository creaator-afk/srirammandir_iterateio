import React from 'react';
import { Link } from 'react-router-dom';
import img_sm_logo_en_dark from '../../assets/img/img_sm_logo_en_dark.svg';

const NavbarBrand = () => {
    return (
        <Link className="navbar-brand" to="#">
            <img src={img_sm_logo_en_dark} alt=""/>
        </Link>
    );
};

export default NavbarBrand;