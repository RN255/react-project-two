import BannerOne from "./BannerOne";
import PlanStaycation from "./PlanStaycation";
import Advice from "./Advice";
import Footer from "./Footer";
import JourneysList from "./JourneysList";

import { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
import HotelAdvice from "./hotelAdvice";

const LOCAL_STORAGE_KEY = "journeysApp.journeys";

export default function Home() {
  const [journeys, setJourneys] = useState([]);
  const journeyFromRef = useRef();
  const journeyToRef = useRef();
  const journeyDepartDateRef = useRef();
  const journeyReturnDateRef = useRef();
  const journeyCabinClassRef = useRef();

  const [formErrorMsg, setFormErrorMsg] = useState("");

  const [noJourneysMsg, setnoJourneysMsg] = useState("");

  useEffect(() => {
    const storedJourneys = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedJourneys) setJourneys(storedJourneys);
    // just take this out? we will lose the message but it will still work? maybe add it in somewhere else?
    // or could it be else from the guy above?
    // if (storedJourneys.length < 1) {
    //   setnoJourneysMsg("You currently have no journeys");
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(journeys));
  }, [journeys]);

  function handleAddJourney(e) {
    e.preventDefault();
    const from = journeyFromRef.current.value;
    const to = journeyToRef.current.value;
    const departDate = journeyDepartDateRef.current.value;
    const returnDate = journeyReturnDateRef.current.value;
    const cabinClass = journeyCabinClassRef.current.value;

    if (
      from !== "" &&
      to !== "" &&
      departDate !== "" &&
      returnDate !== "" &&
      cabinClass !== ""
    ) {
      setJourneys((prevJourneys) => {
        return [
          ...prevJourneys,
          {
            id: uuid(),
            from: from,
            to: to,
            departDate: departDate,
            returnDate: returnDate,
            cabinClass: cabinClass,
          },
        ];
      });

      journeyFromRef.current.value = null;
      journeyToRef.current.value = null;
      journeyDepartDateRef.current.value = null;
      journeyReturnDateRef.current.value = null;
      journeyCabinClassRef.current.value = null;

      setnoJourneysMsg("");

      setFormErrorMsg("");
    } else {
      setFormErrorMsg("Please fill in all fields");
    }
  }

  function deleteJourney(id) {
    const newJourneys = journeys.filter((item) => item.id !== id);
    setJourneys(newJourneys);
    // if (newJourneys.length < 1) {
    //   setnoJourneysMsg("You currently have no journeys");
    // }
  }

  return (
    <>
      <section id="formSection">
        <div id="formContainer">
          <div>
            <h2>Let the journey begin</h2>
            <p>follow your heart to your next destination</p>
          </div>
          <div id="formDiv">
            <form>
              <label htmlFor="from">From</label>
              <input
                ref={journeyFromRef}
                type="text"
                id="from"
                name="from"
                maxLength="50"
              />
              <br />

              <label htmlFor="to">To</label>
              <input
                ref={journeyToRef}
                type="text"
                id="to"
                name="to"
                maxLength="50"
                required
              />
              <br />

              <label htmlFor="depart">Depart</label>
              <input
                ref={journeyDepartDateRef}
                type="date"
                id="depart"
                name="depart"
                className="JourneydatesForm"
              />
              <br />

              <label htmlFor="return">Return</label>
              <input
                ref={journeyReturnDateRef}
                type="date"
                id="return"
                name="return"
                className="JourneydatesForm"
              />
              <br />

              <label htmlFor="cabinClass">Cabin class:</label>
              <select
                ref={journeyCabinClassRef}
                id="cabinClass"
                name="cabinClass"
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business class</option>
                <option>First class</option>
              </select>

              <div id="buttonHolder">
                <button onClick={handleAddJourney}>Book flight</button>
                <h3 id="formErrorMessage">{formErrorMsg}</h3>
              </div>

              {/* <div id="buttonHolder">
                <input
                  onClick={handleAddJourney}
                  type="submit"
                  value="Book flight"
                  id="submitButton"
                />
              </div> */}
            </form>
          </div>
        </div>
      </section>

      <JourneysList
        journeys={journeys}
        deleteJourney={deleteJourney}
        noJourneysMsg={noJourneysMsg}
      ></JourneysList>
      <BannerOne></BannerOne>
      <Advice></Advice>
      <PlanStaycation></PlanStaycation>
      <HotelAdvice></HotelAdvice>
      <Footer></Footer>
    </>
  );
}
