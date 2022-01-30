import { useHistory } from "react-router";
import Header from "../../components/header/Header";
import "./Landing.scss";

const Landing = () => {
  const history = useHistory()

  const register = () => {
  
    history.push('/auth')
  }
  return (
    <div>
      <Header />
      <section className="landing">
        <div className="landingLeft">
          <div className="landingLeft-text">
            <h1>The World's favourite Social Media scheduling platform</h1>
            <p>
              Later is the all-in-one social marketing platform for the top
              social networks. Plan, analyze, and publish your content in a few
              clicks – so you can save time and grow your business.
            </p>
          </div>
          <button className="landingLeft-button" onClick={register}>Create Free Account</button>

          <span>Free forever. Set up in minutes. No credit card required.</span>
        </div>
        <div className="landingRight">
            <div className="landingRight-clip"></div>
          <div>
            <img src="assets/landing.jpg" alt="" className="landingRight-img" />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Landing;
