import React from "react";
import Services from "../Services/Services";
import './Home.css';

const Home = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <h1>Dr, SMA Erfan</h1>
          <p className="w-50">
            I am here to give you a good treatment for your health. I am a
            colorectal, endoscopic and laser surgeon. I am working as doctor. I
            started it many years ago.
          </p>
          <button className="btn btn-dark">Read About Me</button>
        </div>
      </section>
      <Services></Services>
    </div>
  );
};

export default Home;
