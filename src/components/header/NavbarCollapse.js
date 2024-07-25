import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import PujaFormPopup from './PujaFormPopup';

const NavbarCollapse = () => {
    const [isPujaFormVisible, setPujaFormVisible] = useState(false);

    const handlePujaFormToggle = () => {
        setPujaFormVisible(!isPujaFormVisible);
    };

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Puja</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Panchang</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Temples</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                        Library
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Sanatan Shitya</Link></li>
                        <li><Link className="dropdown-item" to="#">Aarti</Link></li>
                        <li><Link className="dropdown-item" to="#">Chalisa</Link></li>
                        <li><Link className="dropdown-item" to="#">Mantra</Link></li>
                        <li><Link className="dropdown-item" to="#">Incarnations of gods and godesses</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="#">Shrimad Bhagwat - Interesting Stories</Link></li>
                        <li><Link className="dropdown-item" to="#">Ayurvedic and Home Remedies</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" to="#">Disabled</Link>
                </li>
            </ul>
            <ul className="navbar-nav me-0 mb-2 mb-lg-0 ">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                        Language
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">English</Link></li>
                        <li><Link className="dropdown-item" to="#">Hindi</Link></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownUser" role="button"
                          data-bs-toggle="dropdown" aria-expanded="false">
                        <FaUser/>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownUser">
                        <li><Link className="dropdown-item" to="#">To check all available pujas @ offers:</Link></li>
                        <li className="container-fluid">
                            <button className="btn-primary">Login/Create an account</button>
                        </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="#">My Account</Link></li>
                        <li><Link className="dropdown-item" to="/puja/history">My Puja Bookings</Link></li>
                        <li><Link className="dropdown-item" to="#">My Ramotsav Bookings</Link></li>
                        <li onClick={handlePujaFormToggle}><Link className="dropdown-item" to="#">Book Puja</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="#">Whatsapp</Link></li>
                        <li><Link className="dropdown-item" to="#">Gmail</Link></li>
                        <li><Link className="dropdown-item" to="#">Whatsapp us</Link></li>
                    </ul>
                </li>
            </ul>
            {isPujaFormVisible && <PujaFormPopup onClose={handlePujaFormToggle} />}
        </div>
    );
};

export default NavbarCollapse;