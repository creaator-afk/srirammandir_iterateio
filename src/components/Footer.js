import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ic_footer_logo_azadi_ka_mahotsav, ic_footer_logo_digitalindia, ic_footer_logo_startupindia,
    img_appstore_logo,
    img_playstore_logo,
    img_showcase_section_family, sirmandir_footer_en_logo
} from "../assets/imageResources";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram, FaYoutube} from "react-icons/fa6";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-light text-center p-0 m-0">
            <div className="p-lg-0 col-xl-7 mx-xl-auto container-fluid row">
                <div className="col-md-6  text-center mt-auto mb-auto text-lg-start">
                    <h2>Download Sri Mandir app now !!</h2>
                    <p className="caption">Connect to your beloved God, anytime, anywhere!</p>
                    <div className="row justify-content-start">
                        <div className="col-md-5">
                            <img src={img_playstore_logo} className="img-fluid w-100" alt="playstore_logo"/>
                        </div>
                        <div className="col-md-5">
                            <img src={img_appstore_logo} className="img-fluid w-100" alt="appstore_logo"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src={img_showcase_section_family} alt="Big" className="img-fluid"/>
                </div>
            </div>
            <div className="container-fluid p-2" style={{background: "darkorange"}}>
                <div className="col-xl-7 mx-xl-auto row justify-content-between align-items-center">
                    <div className="col-sm-12 col-lg-2 text-start align-self-lg-start">
                        <img src={sirmandir_footer_en_logo} alt="footer"/>
                    </div>
                    <div className="row col-sm-12 col-lg-7 justify-content-end text-start"
                         style={{color: "white", fontWeight: "bold", textDecoration: "none"}}>
                        <div className="col-sm-12 col-lg-auto"><Link to="/about"
                                                                  style={{color: "inherit", textDecoration: "none"}}>About
                            Us</Link></div>
                        <div className="col-sm-12 col-lg-auto "><Link to="/terms"
                                                                   style={{color: "inherit", textDecoration: "none"}}>Terms
                            and Conditions</Link>
                        </div>
                        <div className="col-sm-12 col-lg-auto "><Link to="/privacy-policy"
                                                                   style={{color: "inherit", textDecoration: "none"}}>Privacy
                            Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-none d-lg-flex col-xl-7 mx-xl-auto justify-content-between">
                    <div>
                        <img src={ic_footer_logo_azadi_ka_mahotsav} alt="azadi"/>
                        <img src={ic_footer_logo_digitalindia} alt="digital"/>
                        <img src={ic_footer_logo_startupindia} alt="startup"/>
                    </div>
                    <div className="col-md-3 d-flex justify-content-evenly align-items-center">
                        <FaFacebook className="w-auto h-100"/>
                        <FaInstagram className="w-auto h-100"/>
                        <FaYoutube className="w-auto h-100"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;