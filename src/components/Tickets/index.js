import classNames from "classnames";
import card from "../Card/style.module.css";
import Icon from "../Icon";
import ticketStyle from "./style.module.css";
const Tickets = ({ tickets }) => {
  return (
    <div
      className={classNames({
        [ticketStyle.container]: true,
        [card.pt12]: true,
      })}
      style={{ marginTop: "calc(var(--unit) * -3)" }}
    >
      {tickets.map((ticket) => (
        <div
          className={classNames({
            [ticketStyle.instance]: true,
            [card.ml10]: true,
            [card.mr4]: true,
            [card.mt4]: true,
            [card.pb4]: true,
          })}
        >
          <span
            className={classNames({
              [ticketStyle.title]: true,
              [card.label]: true,
              [card.lg]: true,
              [card.bold]: true,
              [card.primary]: true,
            })}
          >
            <span className={card.mr4}>{ticket.type}</span>
            {ticket.amenities.map((amenity, i) => (
              <span className={i < ticket.amenities.length - 1 ? card.mr1 : ""}>
                <Icon name={amenity} />
              </span>
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
