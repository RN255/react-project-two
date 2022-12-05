import { Link } from "react-router-dom";
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";
import youtubeIcon from "../images/youtube.png";
import twitterIcon from "../images/twitter.png";

export default function Footer() {
  return (
    <>
      <div id="footerContainer">
        <div id="footer">
          <div id="footerSocialMediaIconsContainer">
            <img src={facebookIcon} alt="facebook icon"></img>
            <img src={instagramIcon} alt="instagram icon"></img>
            <img src={youtubeIcon} alt="youtube icon"></img>
            <img src={twitterIcon} alt="twitter icon"></img>
          </div>
          <ul>
            <li>
              <Link to="/">Search flights</Link>
            </li>
            <li>-</li>
            <li>
              <Link to="/Tips">Search tips</Link>
            </li>
            <li>-</li>
            <li>
              <Link to="/Partnership">Partnership</Link>
            </li>
          </ul>
          <p>© 2022 superflight</p>
        </div>
      </div>
    </>
  );
}
