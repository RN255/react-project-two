import adviceOne from "../images/adviceOne.svg";
import adviceTwo from "../images/adviceTwo.svg";
import adviceThree from "../images/adviceThree.svg";

export default function Advice() {
  return (
    <>
      <div id="adviceContainer">
        <div id="advice">
          <div className="adviceCard">
            <img src={adviceOne} alt="adive image one"></img>
            <h3>Ready when you are</h3>
            <p>
              See where you can travel to right now and find the best deals
              across thousands of flights, hotels and car hire options
            </p>
          </div>
          <div className="adviceCard">
            <img src={adviceTwo} alt="adive image one"></img>
            <h3>Plan with confidence</h3>
            <p>
              Stay one step ahead with the latest travel updates, free hotel and
              car hire cancellation and COVID-19 travel insurance.
            </p>
          </div>
          <div className="adviceCard">
            <img src={adviceThree} alt="adive image one"></img>
            <h3>Keep it simple</h3>
            <p>
              No hidden fees. No hidden charges. No funny business. With us,
              you’ll always know exactly where your money goes. So you can relax
              before your trip even begins.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
