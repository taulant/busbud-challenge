import data from "../../data/data";
import DepartureContainer from "../DepartureContainer";

const payload = data.sellable;

function App() {
  return <DepartureContainer payload={payload} />;
}

export default App;
