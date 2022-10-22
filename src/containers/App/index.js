import Departure from "../../components/Departure";
import data from "../../data/data";

const payload = data.summary;

function App() {
  return (
    <div>
      <Departure.Card>
        {payload.travel.duration.note && (
          <Departure.InfoPanel message={payload.travel.duration.note} />
        )}
        <Departure.Summary travel={payload.travel} tickets={payload.tickets} />
        {payload.tickets.length > 1 && (
          <Departure.Tickets tickets={payload.tickets} />
        )}
      </Departure.Card>
    </div>
  );
}

export default App;
