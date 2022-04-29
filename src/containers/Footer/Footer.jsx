import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper/index";

import "./Footer.scss";

const Footer = () => {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (userName === "" || message === "") {
      alert("Both fields are mandatory");
      return;
    }
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const { data } = await axios.post(
      "https://portfolio-mailjet-service.herokuapp.com/email",
      {
        name: userName,
        message
      },
      config
    );

    // console.log("Data - ", data);
    setIsLoading(false);
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:karansiddhu22@gmail.com" className="p-text">
            karansiddhu22@gmail.com
          </a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +1 (123) 456-7890
          </a>
        </div> */}
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg");
