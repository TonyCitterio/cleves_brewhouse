import { Link } from "react-router-dom";
import { ImMail3 } from "react-icons/im";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import classes from "./Navbar.module.css";
import clevesBrewHouse from "../pictures/thumbnail_Cleves Brewhouse1.jpg";

const Navbar = () => {
  return (
    <section className={classes.navbar}>
      <div className={classes.navbarImg}>
        <img src={clevesBrewHouse} alt="logo" className={classes.navbarLogo}></img>
      </div>
      <div className={classes.link}>
        <Link className={classes.linkStyle} to="/">
          Hem
        </Link>
        <Link className={classes.linkStyle} to="howToBrew">
          Processen
        </Link>
        <Link className={classes.linkStyle} to="brewery">
          Bryggeri
        </Link>
        <Link className={classes.linkStyle} to="myBeer">
          Bryggeriets öl
        </Link>
      </div>
      <div className={classes.contact}>
        <div className={classes.dropdown}>
          <button className={classes.dropdownIcon}>
            <IoIosArrowDropdownCircle size={37} />
          </button>
          <div className={classes.dropdownMenu}>
            <Link className={classes.dropdownLink} to="/">
              Hem
            </Link>
            <Link className={classes.dropdownLink} to="howToBrew">
              Processen
            </Link>
            <Link className={classes.dropdownLink} to="brewery">
              Bryggeri
            </Link>
            <Link className={classes.dropdownLink} to="myBeer">
              Bryggeriets öl
            </Link>
            <div>
            </div>
          </div>
        </div>
        <a href="mailto:tcitterio@hotmail.com">
          <ImMail3 size={29} className={classes.icon} />
        </a>
      </div>
    </section>
  );
};

export default Navbar;
