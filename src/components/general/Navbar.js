import { IoMail } from "react-icons/io5";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={classes.navbar}>
      <div>
        <h1 className={classes.heading}>
          Cleves
          <span>Brew</span>
          <span>House</span>
        </h1>
      </div>
      <div className={classes.link}>
        <p>Hem</p>
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
