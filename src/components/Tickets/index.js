import Icon from "../Icon";
const Tickets = ({ tickets }) => {
  return (
    <div>
      {tickets.map((ticket) => (
        <div>
          <span>
            {ticket.type}
            {ticket.amenities.map((amenity) => (
              <Icon name={amenity} />
            ))}
          </span>
          <button>
            {ticket.price} <Icon name="ArrowRightBlue500" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
