import React from "react";
import "./Header.scss";

import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-left">
        <h1>SocialApp</h1>
        <h2>The World's favourite Social Media scheduling platform</h2>
        <p>
          SocialApp is the all-in-one social marketing platform for the top
          social networks. Plan, analyze, and publish your content in a few
          clicks – so you can save time and grow your business and become more
          Productive.
        </p>
        <button type="button" className="custom__button">
          Explore more Socials
        </button>
      </div>
      <div className="app__header-right">
        <div className="app__header-right_social-links">
          <BsInstagram size={30} color="whitesmoke" />
          <span>Instagram</span>
        </div>
        <div className="app__header-right_social-links">
          <FiTwitter size={30} color="whitesmoke" />
          <span>Twitter</span>
        </div>
        <div className="app__header-right_social-links">
          <AiOutlineFacebook size={30} color="whitesmoke" />
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
