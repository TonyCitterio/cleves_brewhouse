import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import classes from "./MyBeer.module.css";
import lager from "../pictures/dencleceskoldskalagern.jpeg";
import beerOne from "../pictures/etikett tomte.jpg";
import beerTwo from "../pictures/etikett sur.jpg";
import beerThree from "../pictures/etikett lager.jpg";
import beerFour from "../pictures/etikett milkshake.jpg";

const MyBeer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY !== 0 && window.innerWidth <= 714);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={toTheTop}
        className={classes.button}
        style={{
          display: showButton ? "block" : "none",
          "@media (max-width: 714px)": { display: "block" },
        }}
      >
        <IoIosArrowDropupCircle size={37} />
      </button>
      <div className={classes.introMyBeer}>
        <div>
          <img
            src={lager}
            alt="Den Clevesköldska Lagern"
            className={classes.myBeerImg}
          ></img>
        </div>
        <div>
          <div className={classes.introMyBeerTextDiv}>
            <h1>Bryggeriets öl</h1>
            <p className={classes.myBeerText}>
              Jag brygde min första öl 2012. Sedan dess har jag bryggt ett antal
              olika sorters öl. <br></br> Jag tycker om att exprimentera mig
              fram och är inte rädd för att prova nya saker för att få fram goda
              smarker på ölet.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.contentMyBeer}>
        <h2>Utforska vårt sortiment av öl med personlighet!</h2>
        <p>Delas bara i slutna sällskap!</p>
        <span className={classes.myBeerYet}>Än</span>
      </div>
      <div className={classes.myBeerLink}>
        <Link className={classes.myBeerLinkStyleOne} to="/porter">
          <img src={beerFour} alt="beer label"></img>
        </Link>
        <Link className={classes.myBeerLinkStyleTwo} to="/sourAle">
          <img src={beerTwo} alt="beer label"></img>
        </Link>
        <Link className={classes.myBeerLinkStyleThree} to="/christmas">
          <img src={beerOne} alt="beer label"></img>
        </Link>
        <Link className={classes.myBeerLinkStyleFour} to="/lager">
          <img src={beerThree} alt="beer label"></img>
        </Link>
      </div>
    </>
  );
};

export default MyBeer;
