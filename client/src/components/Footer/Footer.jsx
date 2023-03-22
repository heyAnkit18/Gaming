import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            E-commerce (electronic commerce) is the buying and selling of goods
            and services, or the transmitting of funds or data, over an
            electronic network, primarily the internet. These business
            transactions occur either as business-to-business (B2B),
            business-to-consumer (B2C), consumer-to-consumer or
            consumer-to-business.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
                  Bhim Nagar Gulaothi, BSR
                </div>
          </div>
          <div className="c-item"></div>
          <FaEnvelope />
          <div className="text">ankitkumarjune18@gmail.com</div>
          <div className="c-item">
          <FaMobileAlt />
          <div className="text">8449917791</div>
        </div>
        </div>
        
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">ANKIT-E-STORE 2023 CREATED BY ANKIT</div>
          <img src={Payment} />
        </div>
        </div>
      
    </footer>
  );
};

export default Footer
