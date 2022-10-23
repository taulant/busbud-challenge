import classNames from "classnames";
import card from "../Card/style.module.css";

const Point = ({ time, location, city, map }) => {
  return (
    <div>
      <div
        className={classNames({
          [card.label]: true,
          [card.bold]: true,
          [card.xl]: true,
          [card.primary]: true,
          [card.mb2]: true,
        })}
      >
        {time}
      </div>
      <div
        className={classNames({
          [card.label]: true,
          [card.regular]: true,
          [card.lg]: true,
          [card.secondary]: true,
          [card.mb1]: true,
        })}
      >
        {location}
      </div>
      <div
        className={classNames({
          [card.label]: true,
          [card.bold]: true,
          [card.xs]: true,
          [card.tertiary]: true,
          [card.mb1]: true,
        })}
      >
        {city}
      </div>
      <a
        href={map}
        className={classNames({
          [card.label]: true,
          [card.bold]: true,
          [card.md]: true,
          [card.link]: true,
        })}
        target="_blank"
      >
        Map
      </a>
    </div>
  );
};

export default Point;
