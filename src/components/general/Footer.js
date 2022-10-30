import { FaRegCopyright } from "react-icons/fa";
import classes from "./Footer.module.css";
import clevesBrewHouse from "../pictures/thumbnail_Cleves Brewhouse1.jpg"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <FaRegCopyright size={12} />
        <p>Copyright2022.</p>
      </div>
      <div>
      <img src={clevesBrewHouse} alt="logo" className={classes.footerLogo}></img>
      </div>
      <div>
        <p>Delas bara i slutna sällskap!</p>
      </div>
    </div>
  );
};

export default Footer;
