import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavbarCollapse = () => {
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
                <li className="nav-item navbar-brand">
                    <FaUser/>
                </li>
            </ul>
        </div>
    );
};

export default NavbarCollapse;