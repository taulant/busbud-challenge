import classNames from "classnames";
import card from "../Card/style.module.css";
import Icon from "../Icon";
import iconWithText from "./style.module.css";

const IconWithText = ({ icon, text }) => {
  return (
    <span
      className={classNames({
        [iconWithText.align]: true,
        [card.label]: true,
        [card.md]: true,
        [card.regular]: true,
        [card.secondary]: true,
        [card.mr4]: true,
      })}
    >
      <Icon name={icon} />
      {!text ? icon : text}
    </span>
  );
};

export default IconWithText;
