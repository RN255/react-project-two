import parisSkyline from "../images/parisSkyline.jpg";
import Footer from "./Footer";
import partnershipPhoneMan from "../images/partnershipPhoneMan.jpg";

export default function Partnership() {
  return (
    <>
      <div id="partnership">
        <div id="partnershipTitleSection">
          <h1>Partnerships that power</h1>
          <p>
            Connect with the world's travellers and grow your business in
            extraordinary ways
          </p>
        </div>
        <img src={parisSkyline} alt=""></img>
        <p>
          Every day, millions of people come to Skyscanner to be inspired, to
          dream and to find their perfect flight, hotel or car rental. We'll
          help you reach them and turn their passion for travel into exciting,
          rewarding growth opportunities for you.
        </p>
        <div id="partnershipsInfoSquaresContainer">
          <div className="partnershipsInfoSquares" id="PartInfoBoxOne">
            <h3>100 million+</h3>
            <p>monthly users</p>
          </div>
          <div className="partnershipsInfoSquares" id="PartInfoBoxTwo">
            <h3>100 million+</h3>
            <p>app downloads</p>
          </div>
          <div className="partnershipsInfoSquares" id="PartInfoBoxThree">
            <h3>450 million+</h3>
            <p>monthly page views</p>
          </div>
          <div className="partnershipsInfoSquares" id="PartInfoBoxFour">
            <h3>Available in 52</h3>
            <p>markets</p>
          </div>
        </div>
        <div id="partnershipPhoneManContainer">
          <img src={partnershipPhoneMan} alt="man on phone"></img>
          <div id="partnershipPhoneManContainerInfo">
            <h3>Keep your finger on the travel pulse</h3>
            <p>
              Your destination for trends, news and research. Catch up on the
              biggest events, find out the latest search and booking behaviour,
              read our industry snapshots, and see how we're supporting
              businesses for the future.
            </p>
          </div>
        </div>
        <div id="joinGlobalContainer">
          <h3>Join our global travel marketplace</h3>
          <p>
            Connect with travellers as they search for flights, hotels and car
            hire. Advertise to a highly engaged global audience when they're
            dreaming, searching and booking. And make better strategic decisions
            using our unrivalled traveller demand data.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
