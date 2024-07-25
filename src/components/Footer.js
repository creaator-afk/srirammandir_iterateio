import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ic_footer_logo_azadi_ka_mahotsav, ic_footer_logo_digitalindia, ic_footer_logo_startupindia,
    img_appstore_logo,
    img_playstore_logo,
    img_showcase_section_family
} from "../assets/imageResources";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram, FaYoutube} from "react-icons/fa6";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container-fluid row col-lg-6 ">
                <div className="col-md-6 left-column">
                    <h2>Download Sri Mandir app now !!</h2>
                    <p className="caption">Connect to your beloved God, anytime, anywhere!</p>
                    <div className="row">
                        <div className="col-md-6 left-column">
                            <img src={img_playstore_logo} alt="playstore_logo"/>
                        </div>
                        <div className="col-md-6 right-column">
                            <img src={img_appstore_logo} alt="appstore_logo"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 right-column">
                    <img src={img_showcase_section_family} alt="Big" className="img-fluid"/>
                </div>
            </div>
            <div className="container row col-lg-12">
                <div className="container-fluid text-center p-3">
                    <p>© 2021 Sri Mandir. All Rights Reserved.</p>
                </div>
                <div className="container row flex-lg-row-reverse col-lg-8">
                    <div className="col-2 left-column"><Link to="/privacy-policy">Privacy Policy</Link></div>
                    <div className="col-3 left-column"><Link to="/terms">Terms and Conditions</Link></div>
                    <div className="col-2 left-column"><Link to="/about">About Us</Link></div>
                    <div className="container row flex-lg-row-reverse col-lg-8">
                        <p>© 2024 Firstprinciple Appsforbharat Pvt Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <img src={ic_footer_logo_azadi_ka_mahotsav} alt="azadi"/>
                    <img src={ic_footer_logo_digitalindia} alt="digital"/>
                    <img src={ic_footer_logo_startupindia} alt="startup"/>
                </div>
                <div className="">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaYoutube/>
                </div>
            </div>

        </footer>
    );
};

export default Footer;