import Departure from "../../components/Departure";

const DepartureContainer = ({ payload }) => {
  return (
    <Departure.Card>
      {payload.travel.duration.note && (
        <Departure.InfoPanel message={payload.travel.duration.note} />
      )}
      <Departure.Summary travel={payload.travel} tickets={payload.tickets} />
      {payload.tickets.length > 1 && (
        <Departure.Tickets tickets={payload.tickets} />
      )}
    </Departure.Card>
  );
};

export default DepartureContainer;
