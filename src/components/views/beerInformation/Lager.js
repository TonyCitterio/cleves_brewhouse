import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import classes from "./Lager.module.css";
import beerLabel from "../../pictures/etikett lager.jpg";
import background from "../../pictures/thumbnail_IMG_2177.jpg";

const Lager = () => {
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const handelScroll = () => {
        setShowButton(window.scrollY !== 0 && window.innerWidth <= 714);
      };

      window.addEventListener("scroll", handelScroll);

      return () => {
        window.removeEventListener("scroll", handelScroll);
      };
    }
  }, [isLoading]);

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
       <IoIosArrowDropupCircle size={37}/>
      </button>
      <div className={classes.lagerMain}>
        <div className={classes.lagerLink}>
          <Link className={classes.lagerLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.lagerContainer}>
          <div className={classes.lagerIntro}>
            <img src={beerLabel} alt="beer label"></img>
            <div className={classes.lagerIntroText}>
              <h1>Den Clevesköldska Lagern</h1>
              <p>
                Den Clevesköldska lagern utmanar den traditionella stilen med
                nya humlesorter från Nya Zeeland och den amerikanska västkosten.
              </p>
            </div>
          </div>
          <div className={classes.lagerInfo}>
            <div
              className={classes.lagerInfoImg}
              style={{
                backgroundImage: `url( ${background} )`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
            ></div>
            <div className={classes.lagerInfoUl}>
              <h2>Information om ölen</h2>
              <ul>
                <li>
                  <span>Stil:</span>Amerikansk lager.
                </li>
                <li>
                  <span>Färg:</span>Klar, gul.
                </li>
                <li>
                  <span>Doft:</span>Maltig doft med en lätt kryddig arom.
                </li>
                <li>
                  <span>Smak:</span>Maltig smak med inslag av örter och
                  knäckebröd.
                </li>
                <li>
                  <span>Malt:</span>Pilsner malt, carapils, vienna, melanoidin
                  och acidulated malt.
                </li>
                <li>
                  <span>Humle:</span>Tradition.
                </li>
                <li>
                  <span>Jäst:</span>California Lager Yeast.
                </li>
                <li>
                  <span>Alkohol:</span>4.1 %
                </li>
                <li>
                  <span>Övrigt:</span>Filtrerad.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lager;
