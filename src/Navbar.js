import { Link } from "react-router-dom";
import planelogo from "./images/airplane-mode.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={planelogo} alt="plane icon"></img>
        <h1>Superflight</h1>
      </Link>
      <ul>
        {/* <Link to="/pricing">Pricing</Link> */}
        {/* <Link to="/about">About</Link> */}
      </ul>
    </nav>
  );
}
