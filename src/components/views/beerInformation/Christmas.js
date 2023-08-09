import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import classes from "./Christmas.module.css";
import beerLabel from "../../pictures/etikett tomte.jpg";
import background from "../../pictures/thumbnail_IMG_2177.jpg";

const Christmas = () => {
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
      <div className={classes.christmasMain}>
        <div className={classes.christmasLink}>
          <Link className={classes.christmasLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.christmasContainer}>
          <div className={classes.christmasIntro}>
            <img src={beerLabel} alt="beer label"></img>
            <div className={classes.christmasIntroText}>
              <h1>Cleves Tomte-ish Porter</h1>
              <p>
                En Porter lika autentisk och god som vanlig dock med en svensk
                julig twist i form av en rejäl mängd skumtomtar!
              </p>
            </div>
          </div>
          <div className={classes.christmasInfo}>
            <div
              className={classes.christmasInfoImg}
              style={{
                backgroundImage: `url( ${background} )`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
            ></div>
            <div className={classes.christmasInfoUl}>
              <h2>Information om ölen</h2>
              <ul>
                <li>
                  <span>Stil:</span>Experimentell jul porter.
                </li>
                <li>
                  <span>Färg:</span>Svart, stabil skumkrona.
                </li>
                <li>
                  <span>Doft:</span>Svag doft av jordgubbar, choklad och kaffe.
                </li>
                <li>
                  <span>Smak:</span>Komplex smak av kaffe, vanilj, choklad samt
                  en tydlig karaktär av skumtomtar.
                </li>
                <li>
                  <span>Malt:</span>Pale ale, black malt, vete, carafa special
                  III och Crystal malt.
                </li>
                <li>
                  <span>Humle:</span>Warrior.
                </li>
                <li>
                  <span>Jäst:</span>Voss Kveik.
                </li>
                <li>
                  <span>Alkohol:</span>7.2 %
                </li>
                <li>
                  <span>Övrigt:</span>Skumtomtar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Christmas;
