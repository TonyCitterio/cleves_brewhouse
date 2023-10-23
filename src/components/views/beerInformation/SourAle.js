import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import classes from "./SourAle.module.css";
import beerLabel from "../../pictures/etikett sur.jpg";
import background from "../../pictures/thumbnail_IMG_2177.jpg";

const SourAle = () => {
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
        <IoIosArrowDropupCircle size={37} />
      </button>
      <div className={classes.sourAleMain}>
        <div className={classes.sourAleLink}>
          <Link className={classes.sourAleLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.sourAleContainer}>
          <div className={classes.sourAleIntro}>
            <img src={beerLabel} alt="beer label"></img>
            <div className={classes.sourAleIntroText}>
              <h1>Cleves Surmust</h1>
              <p>
                En öl gjord på en traditionell bas av malt men med ett tillskott
                av koncentrerad julmust. Ölen får sin sura smak av en jäst som
                producerar mjölksyra.
              </p>
            </div>
          </div>
          <div className={classes.sourAleInfo}>
            <div
              className={classes.sourAleInfoImg}
              style={{
                backgroundImage: `url( ${background} )`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
            ></div>
            <div className={classes.sourAleInfoUl}>
              <h2>Information om ölen</h2>
              <ul className={classes.sourAleUlText}>
                <li>
                  <span>Stil:</span>Experimentell suröl.
                </li>
                <li>
                  <span>Färg:</span>Klar, svart.
                </li>
                <li>
                  <span>Doft:</span>Doft av sura Ferrari bilar med colasmak.
                </li>
                <li>
                  <span>Smak:</span>Smak av julmust med en angenäm nivå av
                  surhet.
                </li>
                <li>
                  <span>Malt:</span>Pilsner, vete, acidulated, carapils och
                  havre.
                </li>
                <li>
                  <span>Humle:</span>Centennial.
                </li>
                <li>
                  <span>Jäst:</span>Philly sour.
                </li>
                <li>
                  <span>Alkohol:</span>7.5 %
                </li>
                <li>
                  <span>Övrigt:</span>Julmustkoncentrat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SourAle;
