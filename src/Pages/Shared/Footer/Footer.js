import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="bg-dark mb-0">
      <div className=" container row mx-auto py-5">
        <div className="col-12 col-lg-6 col-md-6">
          <h1 className="text-white m-0">Your Doctor</h1>
        </div>
        <div className="col-12 col-lg-3 col-md-3 footer-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/#services">Services</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="col-12 col-lg-3 col-md-3 footer-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/#services">Services</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <h5 className="text-white text-center pb-2 m-0">&copy; Copyright {year} || Your Doctor.com</h5>
    </footer>
  );
};

export default Footer;
