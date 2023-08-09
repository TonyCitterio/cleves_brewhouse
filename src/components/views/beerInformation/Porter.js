import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropupCircle } from "react-icons/io";
import classes from "./Porter.module.css";
import beerLabel from "../../pictures/etikett milkshake.jpg";
import background from "../../pictures/thumbnail_IMG_2202.jpg";

const Porter = () => {
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
      <div className={classes.porterMain}>
        <div className={classes.porterLink}>
          <Link className={classes.porterLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.porterContainer}>
          <div className={classes.porterIntro}>
            <img src={beerLabel} alt="beer label"></img>
            <div className={classes.porterIntroText}>
              <h1>Cleves Ipa</h1>
              <p>
                Ett öl bryggd med mjölksocker som har en söt ton av jordgubbar,
                melon och en hint av ananas.
              </p>
            </div>
          </div>
          <div className={classes.porterInfo}>
            <div
              className={classes.porterInfoImg}
              style={{
                backgroundImage: `url( ${background} )`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
            ></div>
            <div className={classes.porterInfoUl}>
              <h2>Information om ölen</h2>
              <ul className={classes.porterUlText}>
                <li>
                  <span>Stil:</span>New England American East cost hazy ale.
                </li>
                <li>
                  <span>Färg:</span>Oklar, gul färg.
                </li>
                <li>
                  <span>Doft:</span>Humlearomatisk med en söt ton av jordgubbar,
                  melon och en liten hint av ananas.
                </li>
                <li>
                  <span>Smak:</span>Humlearomatisk, fruktig söt smak med inslag
                  av sockerkaka, ananas och jordgubb.
                </li>
                <li>
                  <span>Malt:</span>Pale ale, vete, havre och melanoidin malt.
                </li>
                <li>
                  <span>Humle:</span>Citra, Belma, Mosaik.
                </li>
                <li>
                  <span>Jäst:</span>Verdant IPA.
                </li>
                <li>
                  <span>Alkohol:</span>5.7 %
                </li>
                <li>
                  <span>Övrigt:</span>Laktos.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Porter;
