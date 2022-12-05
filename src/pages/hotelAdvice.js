import hotelAdviceOne from "../images/hotelAdviceOne.svg";
import hotelAdviceTwo from "../images/hotelAdviceTwo.svg";
import hotelAdviceThree from "../images/hotelAdviceThree.svg";

export default function HotelAdvice() {
  return (
    <>
      <div id="adviceContainer">
        <div id="advice">
          <div className="adviceCard">
            <img src={hotelAdviceOne} alt="person looking out window"></img>
            <h3>See it all</h3>
            <p>
              From local hotels to global brands, discover millions of rooms all
              around the world.
            </p>
          </div>
          <div className="adviceCard">
            <img src={hotelAdviceTwo} alt="playing with mobile phone"></img>
            <h3>Compare right here</h3>
            <p>
              No need to search anywhere else. The biggest names in travel are
              right here.
            </p>
          </div>
          <div className="adviceCard">
            <img src={hotelAdviceThree} alt="dinner"></img>
            <h3>Get exclusive rates</h3>
            <p>
              We’ve special deals with the world's leading hotels – and we share
              these savings with you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
