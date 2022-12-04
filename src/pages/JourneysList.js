import Journey from "./Journey";

export default function JourneysList({ journeys, deleteJourney, noJourneysMsg }) {
  return (
    <>
      <div id="JourneyMainHolder">
        <h2>Current journeys</h2>
        <div id="journeyTitles">
          <p>From:</p>
          <p>To:</p>
          <p>Depature date:</p>
          <p>Return date:</p>
          <p>Cabin class:</p>
          <div></div>
        </div>
        <p id="noJourneyMsg">{noJourneysMsg}</p>
        {journeys.map((journeys) => {
          return (
            <>
              <Journey
                key={journeys.id}
                journeys={journeys}
                deleteJourney={deleteJourney}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
