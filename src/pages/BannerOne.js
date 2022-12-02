import { Link } from "react-router-dom";

export default function BannerOne() {
  return (
    <>
      <div id="bannerContainer">
        <div id="bannerOne">
          <h2>Top tips to bag a Black Friday deal!</h2>
          <p>
            We’re telling all in our latest guide to the art of finding the best
            deals out there, helping you save time and spend less.
          </p>
          <Link to="/Tips">
            <button>See our tips</button>
          </Link>
        </div>
      </div>
    </>
  );
}
