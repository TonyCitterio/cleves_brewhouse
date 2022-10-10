import classes from "./Footer.module.css";
import clevesBrewHouse from "../pictures/thumbnail_Cleves Brewhouse1.jpg"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
      <img src={clevesBrewHouse} alt="logo" height={89} width={89}></img>
      </div>
      <div>
        <p>Från en ölälskare till en annan!</p>
      </div>
      <div>
        <p>Från en ölälskare till en annan!</p>
      </div>
    </div>
  );
};

export default Footer;
