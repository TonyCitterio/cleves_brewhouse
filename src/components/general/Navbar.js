import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import classes from "./Navbar.module.css";
import clevesBrewHouse from "../pictures/thumbnail_Cleves Brewhouse1.jpg";

const Navbar = () => {
  return (
    <section className={classes.navbar}>
      <div>
        <img src={clevesBrewHouse} alt="logo" height={175} width={175}></img>
      </div>
      <div className={classes.link}>
        <Link className={classes.linkStyle} to="/">
          Hem
        </Link>
        <Link className={classes.linkStyle} to="howToBrew">
          Processen
        </Link>
        <p>Om mig</p>
        <p>Min utrustning</p>
        <p>Mina öl</p>
      </div>
      <div className={classes.contact}>
        <a href="mailto:tcitterio@hotmail.com">
          <IoMail className={classes.icon} />
        </a>
      </div>
    </section>
  );
};

export default Navbar;
