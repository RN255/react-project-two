import BannerOne from "./BannerOne";
import PlanStaycation from "./PlanStaycation";
import Advice from "./Advice";
import Footer from "./Footer";
import Journeys from "./Journeys";
import { useState } from "react";

export default function Home() {
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");
  // const [departDate, setDepartDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  // const [cabinClass, setCabinClass] = useState("Economy");

  // const [journey, SetJourney] = useState([
  //   {
  //     from: "London",
  //     to: "Toyko",
  //     depart: "Dec 12",
  //     return: "Jan 23",
  //     cabinClass: "business",
  //     id: 1,
  //   },
  //   {
  //     from: "Ney York",
  //     to: "Paris",
  //     depart: "Feb 14",
  //     return: "March 5",
  //     cabinClass: "first class",
  //     id: 2,
  //   },
  //   {
  //     from: "Seoul",
  //     to: "Tokyo",
  //     depart: "April 17",
  //     return: "June 34",
  //     cabinClass: "economy",
  //     id: 3,
  //   },
  // ]);

  // const handleDelete = (id) => {
  //   const newJourney = journey.filter((journey) => journey.id !== id);
  //   SetJourney(newJourney);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   SetJourney([from, to, departDate, returnDate, cabinClass]);
  //   console.log(journey)
  // };

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   SetJourney((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  return (
    <>
      <section id="formSection">
        <div id="formContainer">
          <div>
            <h2>Let the journey begin</h2>
          </div>
          <div id="formDiv">
            <form /*onSubmit={handleSubmit}*/>
              <label htmlFor="from">From</label>
              <input
                type="text"
                id="from"
                name="from"
                maxLength="50"
                // value={from}
                // onChange={(e) => setFrom(e.target.value)}
                // onChange={handleChange}
              />
              <br />

              <label htmlFor="to">To</label>
              <input
                type="text"
                id="to"
                name="to"
                maxLength="50"
                // value={to}
                // onChange={(e) => setTo(e.target.value)}
                // onChange={handleChange}
              />
              <br />

              <label htmlFor="depart">Depart</label>
              <input
                type="date"
                id="depart"
                name="depart"
                // value={departDate}
                // onChange={(e) => setDepartDate(e.target.value)}
                // onChange={handleChange}
              />
              <br />

              <label htmlFor="return">Return</label>
              <input
                type="date"
                id="return"
                name="return"
                // value={returnDate}
                // onChange={(e) => setReturnDate(e.target.value)}
                // onChange={handleChange}
              />
              <br />

              <label htmlFor="cabinClass">Cabin class:</label>
              <select
                id="cabinClass"
                name="cabinClass"
                // value={cabinClass}
                // onChange={(e) => setCabinClass(e.target.value)}
                // onChange={handleChange}
              >
                <option /*value="Economy"*/>Economy</option>
                <option /*value="Premium Economy"*/>Premium Economy</option>
                <option /*value="Business class"*/>Business class</option>
                <option /*value="First class"*/>First class</option>
              </select>

              <div id="buttonHolder">
                <input type="submit" value="Book flight" id="submitButton" />
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <Journeys journey={journey} handleDelete={handleDelete}></Journeys> */}
      <BannerOne></BannerOne>
      <PlanStaycation></PlanStaycation>
      <Advice></Advice>
      <Footer></Footer>
    </>
  );
}
