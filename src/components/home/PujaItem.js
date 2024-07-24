import React from 'react';
import { FaCalendar, FaLocationArrow } from "react-icons/fa";

const PujaItem = ({ src, message, title, description, location, time }) => (
    <div className="col-md-4 col-sm-6 outlet-item">
        <img src={src} alt={title} className="img-fluid" />
        <p className="feature-description text-center">{message}</p>
        <h4 className="col-12 text-center">{title}</h4>
        <p className="feature-description">{description}</p>
        <div className="puja-location">
            <FaLocationArrow /> <p className="feature-description">{location}</p>
        </div>
        <div className="puja-time">
            <FaCalendar /> <p className="feature-description">{time}</p>
        </div>
        <button className="btn btn-primary col-12">Participate</button>
    </div>
);

export default PujaItem;