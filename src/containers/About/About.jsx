import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import {AppWrap} from "../../Wrapper";

const abouts = [
  {
    title: "Frontend Developer",
    description: "I am a good frontend Developer.",
    imgUrl: images.about01
  },
  {
    title: "Backend Developer",
    description: "I am a good backend Developer.",
    imgUrl: images.about02
  },
  {
    title: "MERN Stack Developer",
    description: "I am a good MERN Stack Developer.",
    imgUrl: images.about03
  },
  {
    title: "App Developer",
    description: "I am a good App Developer.",
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

export default AppWrap(About, "about");
