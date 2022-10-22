import styles from "./style.module.css";

import ArrowRightBlue200 from "../../assets/Icons/ArrowRightBlue200.svg";
import ArrowRightBlue500 from "../../assets/Icons/ArrowRightBlue500.svg";
import ArrowRightPrimary from "../../assets/Icons/ArrowRightPrimary.svg";
import Bathroom from "../../assets/Icons/Bathroom.svg";
import Bus from "../../assets/Icons/Bus.svg";
import Duration from "../../assets/Icons/Duration.svg";
import ETicket from "../../assets/Icons/E-Ticket.svg";
import Passengers from "../../assets/Icons/Passengers.svg";
import Refund from "../../assets/Icons/Refund.svg";
import SeatXL from "../../assets/Icons/SeatXL.svg";
import Thunder from "../../assets/Icons/Thunder.svg";
import Utensils from "../../assets/Icons/Utensils.svg";
import VeryLongArrow from "../../assets/Icons/VeryLongArrow.svg";
import Wifi from "../../assets/Icons/Wifi.svg";

const IconDB = {
  Bathroom,
  Bus,
  Duration,
  ETicket,
  Passengers,
  Refund,
  SeatXL,
  Utensils,
  Wifi,
  VeryLongArrow,
  Thunder,
  ArrowRightBlue200,
  ArrowRightPrimary,
  ArrowRightBlue500,
};

const selectIcon = (name) => {
  return IconDB[name];
};

const Icon = ({ name }) => {
  return <img src={selectIcon(name)} alt={name} className={styles.icon} />;
};

export default Icon;
