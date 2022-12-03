import Journey from "./Journey";

export default function JourneysList({ journeys }) {
  return journeys.map((journeys) => {
    return <Journey key={journeys.id} journeys={journeys} />;
  });
}
