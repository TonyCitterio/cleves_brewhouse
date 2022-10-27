import { FaCopyright } from "react-icons/fa";
import classes from "./Footer.module.css";
import clevesBrewHouse from "../pictures/thumbnail_Cleves Brewhouse1.jpg"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerCopyright}>
        <FaCopyright size={15} />
        <p>All rights reserved.</p>
      </div>
      <div>
      <img src={clevesBrewHouse} alt="logo" height={89} width={89}></img>
      </div>
      <div>
        <p>Delas bara i slutna sällskap!</p>
      </div>
    </div>
  );
};

export default Footer;
