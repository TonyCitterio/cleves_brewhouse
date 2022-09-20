import { IoMail } from "react-icons/io5";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1 className={classes.heading}>
          Cleves
          <span className={classes.center}>Brew</span>
          <span>House</span>
        </h1>
      </section>
      <section className={classes.link}>
        <p>Hem</p>
        <p>Om mig</p>
        <p>Min utrustning</p>
        <p>Mina öl</p>
      </section>
      <section className={classes.contact}>
        <a href="mailto:tcitterio@hotmail.com"><IoMail className={classes.icon}/></a>
      </section>
    </nav>
  );
};

export default Navbar;
