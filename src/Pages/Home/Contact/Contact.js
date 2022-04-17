import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div className=" contact py-5">
      <div className="container contact-container">
        <div>
          <h1>Contact</h1>
          <p>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +8801234567890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
            smaerfan@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> www.smaerfan.com
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> 1/5,
            Block-B, Mohammadpur Housing Estate, College Gate, মিরপুর সড়ক, Dhaka
            1207.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
