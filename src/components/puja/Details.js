import React, {useState} from 'react';
import {FaArrowLeft, FaArrowRightToBracket} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {FaAngleDoubleRight, FaCheckCircle} from "react-icons/fa";
import PaymentFormPopup from "./PaymentFormPopup";

const Details = (props) => {
    const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);
    const handlePaymentFormToggle = () => {
        setPaymentFormVisible(!isPaymentFormVisible);
    };
    return(
    <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between pt-2 pb-2 bg-light px-4">
            <FaCheckCircle color="green"/>Add Details
            <FaCheckCircle color="green"/>Review Booking
            <FaAngleDoubleRight/> Fill Name, Gotra & Address
            <FaAngleDoubleRight/>Make Payment
        </div>
        <div className="container-lg p-2 ps-0">
            <h2><FaArrowLeft/>Enter details for your puja</h2>
        </div>
        <hr className="dropdown-divider"/>
        <div className="container-lg">
            <h2>Your WhatsApp Number</h2>
            <p>
                Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below
                number.</p>
            <p>Your WhatsApp Number</p>
            <input className="w-100" type="text"/>
            <hr style={{height: "15px"}}/>
            <h2>Name of member Participating in Puja</h2>
            <p>Panditji will take these names along with gotra during the puja</p>
            <input className="w-100" type="text"/>
            <hr style={{height: "15px"}}/>
            <h2> Fill Participant Gotra</h2>
            <p>Gotra will be recited during the puja</p>
            <input className="w-100" type="text"/>
            <hr style={{height: "15px"}}/>
            <h2>Do you want to get puja prasad?</h2>
            <p>Prasad will be sent to your address</p>
            <div className="row d-flex">
                <div className="col-6">
                    <button className="btn btn-light w-100">Yes</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-light w-100">No</button>
                </div>
                <button onClick={handlePaymentFormToggle} className="btn btn-primary w-100 mt-4 mb-4">Proceed to book</button>
            </div>
        </div>
        {isPaymentFormVisible && <PaymentFormPopup onClose={handlePaymentFormToggle} />}
    </div>
)};

export default Details;