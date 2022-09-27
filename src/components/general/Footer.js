import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div>
        <h1 className={classes.heading}>
          Cleves
          <span>Brew</span>
          <span>House</span>
        </h1>
      </div>
      <div className={classes.center}>
        <p>Från en ölälskare till en annan!</p>
      </div>
      <div className={classes.center}>
        <p>Från en ölälskare till en annan!</p>
      </div>
    </section>
  );
};

export default Footer;
