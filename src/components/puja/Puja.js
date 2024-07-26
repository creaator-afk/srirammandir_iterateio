import React from 'react';
import { puja_1, puja_2, puja_3} from "../../assets/imageResources";
import {Link} from "react-router-dom";

const Puja = () => {
    return (
        <div className="container-fluid">
            <div className="container-lg">
                <h2>Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h2>
                <h2 >Upgcoming Pujas on Sri Mandir</h2>
                <p>Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
                <div className="row">
                    <div className="card col-4">
                        <div className="card-body">
                            <img className="w-100" src={puja_1} alt=""/>
                            <h5 className="card-title">Ganesh Chaturthi Puja</h5>
                            <p className="card-text">Ganesh Chaturthi is celebrated as the birthday of Lord Ganesha. It
                                is a festival of joy and happiness. Book your puja online with Sri Mandir and get the
                                blessings of Lord Ganesha.</p>
                            <Link to="/puja/booking" className="btn btn-primary">Book Puja</Link>
                        </div>
                    </div>
                    <div className="card col-4">
                        <div className="card-body">
                            <img className="w-100" src={puja_2} alt=""/>
                            <h5 className="card-title">Ganesh Chaturthi Puja</h5>
                            <p className="card-text">Ganesh Chaturthi is celebrated as the birthday of Lord Ganesha. It
                                is a
                                festival of joy and happiness. Book your puja online with Sri Mandir and get the
                                blessings
                                of Lord Ganesha.</p>
                            <Link to="/puja/booking" className="btn btn-primary">Book Puja</Link>
                        </div>
                    </div>
                    <div className="card col-4">
                        <div className="card-body">
                            <img className="w-100" src={puja_3} alt=""/>
                            <h5 className="card-title">Ganesh Chaturthi Puja</h5>
                            <p className="card-text">Ganesh Chaturthi is celebrated as the birthday of Lord Ganesha. It
                                is a
                                festival of joy and happiness. Book your puja online with Sri Mandir and get the
                                blessings
                                of Lord Ganesha.</p>

                            <Link to="/puja/booking" className="btn btn-primary">Book Puja</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Puja;