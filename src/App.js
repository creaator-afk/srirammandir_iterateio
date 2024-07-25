import React from 'react';
import Footer from './components/Footer';
import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Puja from "./components/puja/Puja";
import History from "./components/puja/History";
import Booking from "./components/puja/Booking";
import Cart from "./components/puja/Cart";
import Details from "./components/puja/Details";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/puja" element={<Puja />}/>
          <Route path="/puja/history" element={<History />} />
          <Route path="/puja/booking" element={<Booking/>} />
          <Route path="/puja/cart" element={<Cart />} />
          <Route path="/puja/cart/details" element={<Details />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;