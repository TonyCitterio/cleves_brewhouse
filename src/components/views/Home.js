import classes from "./Home.module.css";
import background from "../pictures/pexels-craig-adderley-1557686.jpg";

const Home = () => {
  return (
    <section
      className={classes.content}
      style={{
        backgroundImage: `url( ${background} )`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <h1>Öl bryggd med kärlek</h1>
      <p className={classes.contentText}>
        Ett nanobryggeri med experimentlusta för att flytta fram gränsen för vad
        som kan kallas öl.
      </p>
    </section>
  );
};

export default Home;
