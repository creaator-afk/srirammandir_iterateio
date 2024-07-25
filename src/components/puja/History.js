import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import {Link} from "react-router-dom";

const History = () => {
    return (
        <div className="container-fluid">
            <div className="container-lg">
                <h2><FaArrowLeft />Puja History</h2>
            </div>
            <div className="container-lg">
                <div className="text-center">
                    <h3>No Puja has been booked yet</h3>
                    <p className="mx-auto w-50">Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja</p>
                    <Link to="/puja"><button className="btn btn-primary">Book Puja</button></Link>
                </div>
            </div>
        </div>
    );
};

export default History;