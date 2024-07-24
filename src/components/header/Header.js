import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import img_sm_logo_en_dark from '../../assets/img/img_sm_logo_en_dark.svg';
import userAvatar from '../../assets/img/user_avatar.svg';
import { FaSearch, FaHome, FaBook, FaLanguage, FaUser } from 'react-icons/fa';

const Header = () => {
    const [libraryDropdownVisible, setLibraryDropdownVisible] = useState(false);
    const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

    const showLibraryDropdown = () => setLibraryDropdownVisible(true);
    const hideLibraryDropdown = () => setLibraryDropdownVisible(false);

    const showLanguageDropdown = () => setLanguageDropdownVisible(true);
    const hideLanguageDropdown = () => setLanguageDropdownVisible(false);

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link className="navbar-brand" to="/">
                    <img src={img_sm_logo_en_dark} alt="Srimandir Logo" className="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><FaHome /> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><FaBook /> Puja</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Panchang"><FaBook /> Panchang</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Temples"><FaBook /> Temples</Link>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={showLibraryDropdown} onMouseLeave={hideLibraryDropdown}>
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                  aria-haspopup="true" aria-expanded={libraryDropdownVisible}>
                                <FaBook /> Library
                            </Link>
                            <div className={`dropdown-menu ${libraryDropdownVisible ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/library/item1">Sanatan Sahitya</Link>
                                <Link className="dropdown-item" to="/library/item2">Aarti</Link>
                                <Link className="dropdown-item" to="/library/item3">Chalisa</Link>
                                <Link className="dropdown-item" to="/library/item4">Mantra</Link>
                                <Link className="dropdown-item" to="/library/item5">Incarnations of gods and godesses</Link>
                                <Link className="dropdown-item" to="/library/item6">Shrimad Bhagwat - Interesting Stories</Link>
                                <Link className="dropdown-item" to="/library/item7">Ayurvedic and Home Remedies</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-nav ml-auto">
                    <li className="nav-item dropdown" onMouseEnter={showLanguageDropdown} onMouseLeave={hideLanguageDropdown}>
                        <Link className="nav-link dropdown-toggle" to="#" id="languageDropdown" role="button"
                              aria-haspopup="true" aria-expanded={languageDropdownVisible}>
                            <FaLanguage /> Language
                        </Link>
                        <div className={`dropdown-menu ${languageDropdownVisible ? 'show' : ''}`} aria-labelledby="languageDropdown">
                            <Link className="dropdown-item" to="/language/en">English</Link>
                            <Link className="dropdown-item" to="/language/es">Spanish</Link>
                            <Link className="dropdown-item" to="/language/fr">French</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            <FaUser className="align-self-center"/>
                        </Link>
                    </li>
                </div>
            </nav>
        </header>
    );
};

export default Header;