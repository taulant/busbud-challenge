import classNames from "classnames";
import card from "../Card/style.module.css";
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
        <div>
          <span
            className={classNames({
              [card.label]: true,
              [card.md]: true,
              [card.regular]: true,
              [card.secondary]: true,
            })}
          >
            <Icon name={travel.vehicle.type} />
            {travel.vehicle.type}
          </span>
          <span
            className={classNames({
              [card.label]: true,
              [card.md]: true,
              [card.regular]: true,
              [card.secondary]: true,
            })}
          >
            <Icon name="Duration" />
            {travel.duration.time}
          </span>
          {travel.passengerCount > 1 && (
            <span
              className={classNames({
                [card.label]: true,
                [card.md]: true,
                [card.regular]: true,
                [card.secondary]: true,
              })}
            >
              <Icon name="Passengers" />
              {travel.passengerCount}
            </span>
          )}
        </div>
        <div>
          {travel.itinerary ? (
            <button
              className={classNames({
                [card.button]: true,
                [card.base]: true,
                [card.bold]: true,
                [card.lg]: true,
              })}
            >
              Itinerary <Icon name="ArrowRightPrimary" />
            </button>
          ) : tickets.length > 1 ? (
            <span
              className={classNames({
                [card.label]: true,
                [card.md]: true,
                [card.bold]: true,
                [card.secondary]: true,
              })}
            >
              Multiple Options
            </span>
          ) : (
            <button
              className={classNames({
                [card.button]: true,
                [card.blueDefault]: true,
                [card.bold]: true,
                [card.lg]: true,
              })}
            >
              {tickets[0].price} <Icon name="ArrowRightBlue200" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
