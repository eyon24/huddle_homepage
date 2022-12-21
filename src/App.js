import logo from "./images/logo.svg";
import illustration from "./images/illustration-mockups.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} alt="logo" />
      </header>
      <div className="content">
        <img className="illustration" src={illustration} alt="" />
        <div className="body">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <div className="btn-container">
            <button>Register</button>
          </div>
        </div>
      </div>
      <footer className="socials">
        <FontAwesomeIcon className="ic" icon={faFacebookF} />
        <FontAwesomeIcon className="ic" icon={faTwitter} />
        <FontAwesomeIcon className="ic" icon={faInstagram} />
      </footer>
    </div>
  );
}

export default App;
