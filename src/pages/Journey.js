export default function Journey({ journeys, deleteJourney }) {
  function handleClick() {
    deleteJourney(journeys.id);
  }

  return (
    <>
      <div id="journeyInfoContainer">
        <p id="journeyFrom">{journeys.from}</p>
        <p>{journeys.to}</p>
        <p>{journeys.departDate}</p>
        <p>{journeys.returnDate}</p>
        <p>{journeys.cabinClass}</p>
        <button onClick={handleClick}>delete</button>
      </div>
    </>
  );
}
