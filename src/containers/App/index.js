import data from "../../data/data";
import DepartureContainer from "../DepartureContainer";

const payload = data.moreOptions;

function App() {
  return <DepartureContainer payload={payload} />;
}

export default App;
