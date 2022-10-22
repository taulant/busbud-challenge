import Greyhound from "../../assets/Logos/Greyhound.png";
import style from "./style.module.css";

const logoDB = { Greyhound };

const selectLogo = (name) => {
  return logoDB[name];
};

const Logo = ({ name }) => {
  return <img src={selectLogo(name)} alt={name} className={style.logo} />;
};

export default Logo;
