export default function Journey({ journeys, deleteJourney }) {
  function handleClick() {
    deleteJourney(journeys.id);
  }

  return (
    <>
      <div id="journeyInfoContainer">
        <p className="mobileScreenJourneyInfo">From:</p>
        <p id="journeyFrom">{journeys.from}</p>
        <p className="mobileScreenJourneyInfo">To:</p>
        <p>{journeys.to}</p>
        <p className="mobileScreenJourneyInfo">Depart:</p>
        <p>{journeys.departDate}</p>
        <p className="mobileScreenJourneyInfo">Arrive:</p>
        <p>{journeys.returnDate}</p>
        <p className="mobileScreenJourneyInfo">Cabin class:</p>
        <p>{journeys.cabinClass}</p>
        <button onClick={handleClick}>delete</button>
      </div>
    </>
  );
}
