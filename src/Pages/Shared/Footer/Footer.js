import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  // Dynamic year
    const year = new Date().getFullYear();
  return (
    // Footer
    <footer className="mb-0">
      <div className=" container row mx-auto py-5">
        <div className="col-12 col-lg-6 col-md-6">
          <h1 className="m-0 mb-3">Cure</h1>
        </div>
        <div className="col-6 col-lg-3 col-md-3 footer-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/#services">Services</Link>
          <Link to="/about">About Me</Link>
        </div>
        <div className="col-6 col-lg-3 col-md-3 mb-5 footer-links">
          <Link to="/login">Blogs</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/#services">Services</Link>
          <Link to="/about">About</Link>
        </div>
        <hr className="mt-3" style={{marginBottom: '-80px'}} />
      </div>
      <h5 className="text-center pb-4 mb-0">&copy; Copyright {year} || Your Doctor.com</h5>
    </footer>
  );
};

export default Footer;
