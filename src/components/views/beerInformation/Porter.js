import { Link } from "react-router-dom";
import classes from "./Porter.module.css";
import beerLabel from "../../pictures/etikett milkshake.jpg";
import background from "../../pictures/thumbnail_IMG_2202.jpg";

const Porter = () => {
  return (
    <>
      <div className={classes.porterMain}>
        <div className={classes.porterLink}>
          <Link className={classes.porterLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.porterContent}>
          <div className={classes.porterIntro}>
            <div>
              <img
                src={beerLabel}
                alt="beer label"
                height={190}
                width={190}
              ></img>
            </div>
            <div>
              <div>
                <h1>Cleves Ipa</h1>
                <p className={classes.porterText}>
                  Ett öl bryggd med mjölksocker som har en söt ton av
                  jordgubbar, melon och en hint av ananas.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.porterInfoContainer}>
            <div className={classes.porterInfo}>
              <div
                style={{
                  backgroundImage: `url( ${background} )`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                }}
              ></div>
              <div>
                <h2>Information om ölen</h2>
                <ul className={classes.porterUlText}>
                  <li>
                    <span>Stil:</span>New England American East cost hazy ale.
                  </li>
                  <li>
                    <span>Färg:</span>Oklar, gul färg.
                  </li>
                  <li>
                    <span>Doft:</span>Humlearomatisk med en söt ton av
                    jordgubbar, melon och en liten hint av ananas.
                  </li>
                  <li>
                    <span>Smak:</span>Humlearomatisk, fruktig söt smak med
                    inslag av sockerkaka, ananas och jordgubb.
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
      </div>
    </>
  );
};

export default Porter;
