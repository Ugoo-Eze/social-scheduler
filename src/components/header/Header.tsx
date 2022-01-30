import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const signIn = () => {
    history.push("/auth");
  };

  const register = () => {
    history.push("/auth");
  };

  const transitionHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  const LandingHeader = () => {
    return (
      <div className={`header ${show && "header-color"}`}>
        <div className="headerLeft">
          <Link to="/" style={{textDecoration: "none", color: "black"}}>
            <div className="headerLeft-logo">
              <h1>Social App</h1>
            </div>
          </Link>
          <div className="headerLeft-options">
            <div className="headerLeft-option">Platform</div>
            <div className="headerLeft-option">Pricing</div>
            <div className="headerLeft-option">Blog</div>
            <div className="headerLeft-option">More</div>
          </div>
        </div>
        <div className="headerRight">
          <div className="headerRight-options">
            <div className="headerRight-option-signIn" onClick={signIn}>
              Sign In
            </div>
            <div className="headerRight-option-create" onClick={register}>
              Start free trial
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <LandingHeader />
    </div>
  );
};

export default Header;
