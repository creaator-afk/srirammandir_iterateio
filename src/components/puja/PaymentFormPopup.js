import React from 'react';
import {FaArrowLeft} from "react-icons/fa6";
import './PaymentFormPopup.css';
import {Link} from "react-router-dom";

const PujaFormPopup = ({onClose}) => {

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2><FaArrowLeft onClick={onClose}/> Please confirm your details</h2>
                <hr className="divider"/>
                <h2>Members participating in the puja</h2>
                <p>These Names & the Gotra will be recited during the puja</p>
                <h4>1. Kshitij Satpathy</h4>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <p>Gotra</p>
                        <p>Phone Number</p>
                        <p>WhatsApp number</p>
                    </div>
                    <div className="col-6">
                        <p>Atri</p>
                        <p>7229876609</p>
                        <p>7229876609</p>
                    </div>
                    <hr/>
                    <h2>Doy you wnat to get puja prasad ?</h2>
                    <p>No</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-light w-100">Edit info</button>
                    </div>
                    <div className="col-6">
                        <Link to="/puja/cart/details" state={{isPaymentIntentFormVisible: true}}>
                            <button className="btn btn-primary w-100" onClick={onClose}>Submit & pay</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PujaFormPopup;