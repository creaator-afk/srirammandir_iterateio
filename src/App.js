import React from 'react';
import Footer from './components/Footer';
import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Puja from "./components/puja/Puja";
import History from "./components/puja/History";
import Booking from "./components/puja/Booking";
import Cart from "./components/puja/Cart";
import Details from "./components/puja/Details";
import axios from "axios";
import Panchang from "./components/Panchang";
import Temples from "./components/Temples";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
const App = () => {
    const checkBackendConnection = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/check`);
            console.log('Backend response:', response.data);
        } catch (error) {
            console.error('Error connecting to backend:', error);
        }
    };

    checkBackendConnection().then(r => console.log('Backend connection checked!'));

    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/puja" element={<Puja/>}/>
                    <Route path="/puja/history" element={<History/>}/>
                    <Route path="/puja/booking" element={<Booking/>}/>
                    <Route path="/puja/cart" element={<Cart/>}/>
                    <Route path="/puja/cart/details" element={<Details/>}/>
                    <Route path="/panchang" element={<Panchang/>}/>
                    <Route path="/temples" element={<Temples/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;