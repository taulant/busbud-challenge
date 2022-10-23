import classNames from "classnames";
import card from "../Card/style.module.css";
import Icon from "../Icon";
import ticket from "./style.module.css";
const Tickets = ({ tickets }) => {
  return (
    <div className={ticket.background}>
      {tickets.map((ticket) => (
        <div>
          <span
            className={classNames({
              [card.label]: true,
              [card.lg]: true,
              [card.bold]: true,
              [card.primary]: true,
            })}
          >
            {ticket.type}
            {ticket.amenities.map((amenity) => (
              <Icon name={amenity} />
            ))}
          </span>
          <button
            className={classNames({
              [card.button]: true,
              [card.base]: true,
              [card.bold]: true,
              [card.lg]: true,
            })}
          >
            {ticket.price} <Icon name="ArrowRightBlue500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
