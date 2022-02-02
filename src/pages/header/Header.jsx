import React from "react";
import "./Header.scss";

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
      </div>
      <div className="app__header-right">
        <div className="app__header-right_social-links">Instagram</div>
        <div className="app__header-right_social-links">Twitter</div>
        <div className="app__header-right_social-links">Facebook</div>
      </div>
    </div>
  );
};

export default Header;
