import React, {useState} from 'react';
import {puja_1} from "../../assets/imageResources";
import PujaFormPopup from "../header/PujaFormPopup";

const Booking = (props) => {

    const [isPujaFormVisible, setPujaFormVisible] = useState(false);

    const handlePujaFormToggle = () => {
        setPujaFormVisible(!isPujaFormVisible);
    };
    return(
    <div className="container-fluid">
        <div className="container-lg">
            <h2>Book Puja</h2>
        </div>
        <div className="container-lg">
            <div className="text-center">
                <h3>No Puja has been booked yet</h3>
                <img className="w-75" src={puja_1} alt=""/>
                <p className="text-uppercase">nakshatra of shani special</p>
                <h2>11,000 Shiv Mool Mantra Jaap and Shani Til Tel Abhishek</h2>
                <h3>For Blessing to Overcome Delays and Adversities in Life</h3>
                <p className="mx-auto w-50">Book your Puja online at Popular Temples of India. Panditji will take
                    sankalp with your name and gotra during the Puja</p>
                <button onClick={handlePujaFormToggle} className="btn btn-primary">Book Puja</button>
            </div>
            <div className="container-lg">
                <h2>Select puja Package</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">₹851</h5>
                                <p className="card-text">Basic Puja Package</p>
                                <ul>
                                    <li>Pandit ji will call out your name and gotra during the puja sankalp.</li>
                                    <li>Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan
                                        to be done in your name.
                                    </li>
                                    <li>Upon completion, a video of your puja and offering will be shared with you on
                                        your registered WhatsApp number or can be found in your booking history within
                                        3-4 days.
                                    </li>
                                    <li>Sacred tirth prasad will be sent to your address within 8-10 days.</li>
                                </ul>
                                <button onClick={handlePujaFormToggle} className="btn btn-primary">Book Puja</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">₹1251</h5>
                                <p className="card-text">Partner puja Package</p>
                                <ul>
                                    <li>Pandit ji will call out your name and gotra during the puja sankalp.</li>
                                    <li>Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan
                                        to be done in your name.
                                    </li>
                                    <li>Upon completion, a video of your puja and offering will be shared with you on
                                        your registered WhatsApp number or can be found in your booking history within
                                        3-4 days.
                                    </li>
                                    <li>Sacred tirth prasad will be sent to your address within 8-10 days.</li>
                                </ul>

                                <button onClick={handlePujaFormToggle} className="btn btn-primary">Book Puja</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isPujaFormVisible && <PujaFormPopup onClose={handlePujaFormToggle} />}
    </div>
)};

export default Booking;