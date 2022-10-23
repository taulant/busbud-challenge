import classNames from "classnames";
import card from "../Card/style.module.css";
import Icon from "../Icon";
import IconWithText from "../IconWithText";
import Logo from "../Logo";
import Point from "../Point";
import summary from "./style.module.css";
const Summary = ({ travel, tickets }) => {
  return (
    <div className={summary.card}>
      <div
        className={classNames({
          [summary.header]: true,
          [card.pt8]: true,
          [card.mr8]: true,
          [card.mb10]: true,
          [card.ml10]: true,
        })}
      >
        <Logo name={travel.company} />
        <div>
          {travel.vehicle.amenities.map((amenity, i) => (
            <span
              className={
                i < travel.vehicle.amenities.length - 1 ? card.mr1 : ""
              }
            >
              <Icon name={amenity} />
            </span>
          ))}
        </div>
      </div>
      <div
        className={classNames({
          [summary.points]: true,
          [card.mr6]: true,
          [card.mb10]: true,
          [card.ml10]: true,
        })}
      >
        <Point
          time={travel.from.time}
          location={travel.from.location}
          city={travel.from.city}
          map={travel.from.map}
        />
        <span
          className={classNames({
            [summary.arrow]: true,
          })}
        >
          <Icon name="VeryLongArrow" />
        </span>

        <Point
          time={travel.to.time}
          location={travel.to.location}
          city={travel.to.city}
          map={travel.to.map}
        />
      </div>
      <div
        className={classNames({
          [summary.footer]: true,
          [card.ml10]: true,
          [card.mr4]: true,
        })}
      >
        <div
          className={classNames({
            [summary.info]: true,
            [card.mb8]: true,
            [card.mt4]: true,
          })}
        >
          <IconWithText icon={travel.vehicle.type} />
          <IconWithText icon="Duration" text={travel.duration.time} />
          {travel.passengerCount > 1 && (
            <IconWithText icon="Passengers" text={travel.passengerCount} />
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
                [card.mb4]: true,
              })}
            >
              Itinerary <Icon name="ArrowRightPrimary" />
            </button>
          ) : tickets.length > 1 ? (
            <div
              className={classNames({
                [card.label]: true,
                [card.md]: true,
                [card.bold]: true,
                [card.secondary]: true,
                [card.mt8]: true,
                [card.mb4]: true,
                [card.mr8]: true,
              })}
            >
              Multiple Options:
            </div>
          ) : (
            <button
              className={classNames({
                [card.button]: true,
                [card.blueDefault]: true,
                [card.bold]: true,
                [card.lg]: true,
                [card.mb4]: true,
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
