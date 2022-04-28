import React from "react";
import { BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/karan320" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/karan-siddhu/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://www.youtube.com/channel/UCeqjwRxTIZwEHIKuOT-0VUg"
        target="_blank"
        rel="noreferrer"
      >
        <BsYoutube />
      </a>
    </div>
  );
};

export default SocialMedia;
