import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImMail3 } from "react-icons/im";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import classes from "./Navbar.module.css";
import clevesBrewHouse from "../pictures/thumbnail_Cleves Brewhouse1.jpg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handelOutsideClick = (event) => {
      if (isDropdownOpen && !event.target.closest(`.${classes.dropdown}`)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handelOutsideClick);

    return () => {
      window.removeEventListener("click", handelOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <section className={classes.navbar}>
      <div className={classes.navbarImg}>
        <img
          src={clevesBrewHouse}
          alt="logo"
          className={classes.navbarLogo}
        ></img>
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
          <button className={classes.dropdownIcon} onClick={toggleDropdown}>
            <IoIosArrowDropdownCircle size={38} />
          </button>
          {isDropdownOpen && (
            <div className={classes.dropdownMenu}>
              <Link className={classes.dropdownLink} to="/" onClick={() => {setIsDropdownOpen(false)}}>
                Hem
              </Link>
              <Link className={classes.dropdownLink} to="/howToBrew" onClick={() => {setIsDropdownOpen(false)}}>
                Processen
              </Link>
              <Link className={classes.dropdownLink} to="/brewery" onClick={() => {setIsDropdownOpen(false)}}>
                Bryggeri
              </Link>
              <Link className={classes.dropdownLink} to="/myBeer" onClick={() => {setIsDropdownOpen(false)}}>
                Bryggeriets öl
              </Link>
            </div>
          )}
        </div>
        <a href="mailto:tcitterio@hotmail.com">
          <ImMail3 size={25} className={classes.icon} />
        </a>
      </div>
    </section>
  );
};

export default Navbar;
