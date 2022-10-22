import Icon from "../Icon";
import Logo from "../Logo";
import Point from "../Point";
const Summary = ({ travel, tickets }) => {
  return (
    <div>
      <div>
        <Logo name={travel.company} />
        <div>
          {travel.vehicle.amenities.map((amenity) => (
            <Icon name={amenity} />
          ))}
        </div>
      </div>
      <Point
        time={travel.from.time}
        location={travel.from.location}
        city={travel.from.city}
        map={travel.from.map}
      />
      <Icon name="VeryLongArrow" />
      <Point
        time={travel.to.time}
        location={travel.to.location}
        city={travel.to.city}
        map={travel.to.map}
      />
      <div>
        <span>
          <Icon name={travel.vehicle.type} />
          {travel.vehicle.type}
        </span>
        <span>
          <Icon name="Duration" />
          {travel.duration.time}
        </span>
        <span>
          {travel.passengerCount > 1 && (
            <>
              <Icon name="Passengers" />
              {travel.passengerCount}
            </>
          )}
        </span>
        <span>
          {travel.itinerary ? (
            <button>
              Itinerary <Icon name="ArrowRightPrimary" />
            </button>
          ) : tickets.length > 1 ? (
            <label>Multiple Options</label>
          ) : (
            <button>
              {tickets[0].price} <Icon name="ArrowRightBlue200" />
            </button>
          )}
        </span>
      </div>
    </div>
  );
};

export default Summary;
