import React from 'react';
import {
    FaArrowLeft,
    FaArrowRightToBracket,
} from "react-icons/fa6";
import {FaAngleDoubleRight, FaCheckCircle} from "react-icons/fa";
import {Link} from "react-router-dom";

const Cart = (props) => (
    <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between pt-2 pb-2 bg-light px-4">
            <FaCheckCircle color="green"/>Add Details
            <FaAngleDoubleRight/>Review Booking
            <FaAngleDoubleRight/>Fill Name, Gotra & Address
            <FaAngleDoubleRight/>Make Payment
        </div>
        <div className="container-lg p-2 ps-0">
            <h2><FaArrowLeft/>Review Booking</h2>
        </div>
        <hr className="dropdown-divider"/>
        <div className="container-lg">
            <div className="card">
                <div className="card-header">
                    <h4>Shree Jagannath Temple, Puri</h4>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>Puja Name: <strong>Sankalp Puja</strong></p>
                            <p>Puja Date: <strong>2021-10-20</strong></p>
                            <p>Puja Time: <strong>10:00 AM</strong></p>
                        </div>
                        <div>
                            <p>Quantity: <strong>1</strong></p>
                            <p>Amount: <strong>₹ 1100</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-2">
                <div className="d-flex card-header justify-content-between align-items-center">
                    <h4>Apply Coupon</h4>
                    <FaArrowRightToBracket/>
                </div>
            </div>
            <Link to="/puja/cart/details">
                <button className="w-100 btn btn-primary mt-2">Proceed to Fill Name, Gotra & Address</button>
            </Link>
        </div>
    </div>
);

export default Cart;