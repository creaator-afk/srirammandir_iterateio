import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import NavbarBrand from './NavbarBrand';
import NavbarToggler from './NavbarToggler';
import NavbarCollapse from './NavbarCollapse';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavbarBrand />
                    <NavbarToggler />
                    <NavbarCollapse />
                </div>
            </nav>
        </header>
    );
};

export default Header;