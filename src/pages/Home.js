import BannerOne from "./BannerOne";
import PlanStaycation from "./PlanStaycation";
import Advice from "./Advice";
import Footer from "./Footer";
import Journeys from "./Journeys";
import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cabinClass, setCabinClass] = useState("Economy");

  const [journey, SetJourney] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    SetJourney([from, to, departDate, returnDate, cabinClass]);
  };

  return (
    <>
      <section id="formSection">
        <div id="formContainer">
          <div>
            <h2>Let the journey begin</h2>
          </div>
          <div id="formDiv">
            <form onSubmit={handleSubmit}>
              <label for="from">From</label>
              <input
                type="text"
                id="from"
                name="from"
                maxlength="50"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <br />

              <label for="to">To</label>
              <input
                type="text"
                id="to"
                name="to"
                maxlength="50"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
              <br />

              <label for="depart">Depart</label>
              <input
                type="date"
                id="depart"
                name="depart"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
              />
              <br />

              <label for="return">Return</label>
              <input
                type="date"
                id="return"
                name="return"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
              <br />

              <label for="cars">Cabin class:</label>
              <select
                id="cars"
                name="cars"
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business class">Business class</option>
                <option value="First class">First class</option>
              </select>

              <div id="buttonHolder">
                <input type="submit" value="Book flight" id="submitButton" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Journeys></Journeys>
      <BannerOne></BannerOne>
      <PlanStaycation></PlanStaycation>
      <Advice></Advice>
      <Footer></Footer>
    </>
  );
}
