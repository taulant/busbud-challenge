import classNames from "classnames";
import card from "../Card/style.module.css";
import Icon from "../Icon";
import info from "./style.module.css";

const InfoPanel = ({ message }) => {
  return (
    <div className={info.background}>
      <span
        className={classNames({
          [card.label]: true,
          [card.sm]: true,
          [card.bold]: true,
          [card.positiveDark]: true,
        })}
      >
        <Icon name="Thunder" />
        {message}
      </span>
    </div>
  );
};

export default InfoPanel;
