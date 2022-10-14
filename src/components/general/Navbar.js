import { Link } from "react-router-dom";
import { ImMail3 } from "react-icons/im";
import classes from "./Navbar.module.css";
import clevesBrewHouse from "../pictures/thumbnail_Cleves Brewhouse1.jpg";

const Navbar = () => {
  return (
    <section className={classes.navbar}>
      <div className={classes.navbarImg}>
        <img src={clevesBrewHouse} alt="logo" height={170} width={170}></img>
      </div>
      <div className={classes.link}>
        <Link className={classes.linkStyle} to="/">
          Hem
        </Link>
        <Link className={classes.linkStyle} to="howToBrew">
          Processen
        </Link>
        <Link className={classes.linkStyle} to ="brewery">Bryggeri</Link>
        <Link className={classes.linkStyle} to="myBeer">Mina öl</Link>
      </div>
      <div className={classes.contact}>
        <a href="mailto:tcitterio@hotmail.com">
          <ImMail3 className={classes.icon} />
        
        </a>
      </div>
    </section>
  );
};

export default Navbar;
