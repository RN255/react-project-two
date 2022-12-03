export default function Journeys({ journey, handleDelete }) {
  return (
    <>
      <div id="journeys">
        <div id="journeysSection">
          <h2>Current journeys</h2>
          {journey.map((journey) => (
            <div key={journey.id}>
              <p>{journey.from}</p>
              <p>{journey.to}</p>
              <p>{journey.depart}</p>
              <p>{journey.return}</p>
              <p>{journey.cabinClass}</p>
              <button onClick={() => handleDelete(journey.id)}>
                delete journey
              </button>
              <hr></hr>
            </div>
          ))}
        </div>
        <p>You have no current journeys.</p>
      </div>
    </>
  );
}
