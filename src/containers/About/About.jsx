import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";
import MotionWrap from "../../Wrapper/MotionWrap";

const abouts = [
  {
    title: "Frontend Developer",
    description: "I am a frontend Developer with a passion for building beautiful and functional web application.",
    imgUrl: images.about01
  },
  {
    title: "Backend Developer",
    description: "I am a backend Developer who can create the web services and APIs used by front-end developers.",
    imgUrl: images.about02
  },
  // {
  //   title: "MERN Stack Developer",
  //   description: "I am a good MERN Stack Developer.",
  //   imgUrl: images.about03
  // },
  {
    title: "App Developer",
    description: "I am a App Developer with a passion for building beautiful and functional mobile application.",
    imgUrl: images.about04
  }
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.title} />

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
