import React from 'react';
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";

const PujaFormPopup = ({onClose}) => {

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2><FaArrowLeft/> Fill your details for Puja</h2>
                <hr className="divider"/>
                <form>
                    <h4>Enter Your Whatsapp Mobile Number</h4>
                    <p>Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on
                        below number.</p>
                    <div className="form-group">
                        <label htmlFor="mobile-number">Your Mobile Number</label>
                        <input type="text" id="mobile-number" className="form-control"/>
                    </div>
                    <h4>Enter Your Name</h4>
                    <div className="form-group">
                        <label htmlFor="details">Your full Name</label>
                        <input id="details" className="form-control"></input>
                    </div>
                    <Link to="/puja/cart">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Link>
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default PujaFormPopup;