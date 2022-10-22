import classNames from "classnames";
import style from "./style.module.css";

const Point = ({ time, location, city, map }) => {
  return (
    <div>
      <div
        className={classNames({
          [style.label]: true,
          [style.bolder]: true,
          [style.xl]: true,
        })}
      >
        {time}
      </div>
      <div
        className={classNames({
          [style.label]: true,
          [style.regular]: true,
          [style.lg]: true,
        })}
      >
        {location}
      </div>
      <div
        className={classNames({
          [style.label]: true,
          [style.bold]: true,
          [style.xs]: true,
        })}
      >
        {city}
      </div>
      <a
        href={map}
        className={classNames({
          [style.label]: true,
          [style.bold]: true,
          [style.md]: true,
        })}
        target="_blank"
      >
        Map
      </a>
    </div>
  );
};

export default Point;
