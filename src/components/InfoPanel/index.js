import classNames from "classnames";
import card from "../Card/style.module.css";
import Icon from "../Icon";
import infoPanel from "./style.module.css";

const InfoPanel = ({ message }) => {
  return (
    <div
      className={classNames({
        [infoPanel.background]: true,
      })}
      style={{ marginBottom: "calc(var(--unit) * -3)" }}
    >
      <span
        className={classNames({
          [infoPanel.panel]: true,
          [card.label]: true,
          [card.sm]: true,
          [card.bold]: true,
          [card.positiveDark]: true,
          [card.pb16]: true,
          [card.pt4]: true,
        })}
      >
        <Icon name="Thunder" />
        {message}
      </span>
    </div>
  );
};

export default InfoPanel;
