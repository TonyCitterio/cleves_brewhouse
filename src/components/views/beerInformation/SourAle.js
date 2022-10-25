import { Link } from "react-router-dom";
import classes from "./SourAle.module.css";
import beerLabel from "../../pictures/etikett sur.jpg";
import background from "../../pictures/clevestomte-ishPorter.jpeg";

const SourAle = () => {
  return (
    <>
      <div className={classes.sourAleMain}>
        <div className={classes.sourAleLink}>
          <Link className={classes.sourAleLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.sourAleContent}>
          <div className={classes.sourAleIntro}>
            <div>
              <img
                src={beerLabel}
                alt="beer label"
                height={180}
                width={180}
              ></img>
            </div>
            <div>
              <div>
                <h1>Cleves speciella Surmust</h1>
                <p>
                  En öl gjord på en traditionell bas av malt men med ett
                  tillskott av koncentrerad julmust. Ölen får sin sura smak{" "}
                  <br></br> av en jäst som producerar mjölksyra.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.sourAleInfo}>
            <div
              style={{
                backgroundImage: `url( ${background} )`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
            ></div>
            <div>
              <h2>Information om ölen</h2>
              <ul>
                <li>
                  <span>Färg:</span>Halmgul med vitt fast skum.
                </li>
                <li>
                  <span>Doft:</span>Ton av örter och citrus.
                </li>
                <li>
                  <span>Smak:</span> Frisk och stram smak med inslag av citrus
                  och markerad beska.
                </li>
                <li>
                  <span>Malt:</span>Wiener malt 100%.
                </li>
                <li>
                  <span>Humle:</span>Magnum & Saaz, torrhumlad med Kazbek.
                </li>
                <li>
                  <span>Jäsning & lagringrg:</span>Underjäst pils, jästid 8
                  dagar, kyl stabiliserad i 25 dagar.
                </li>
                <li>
                  <span>Stamvörtstyrka:</span>14,59
                </li>
                <li>
                  <span>Alkohol %:</span>5.8
                </li>
                <li>
                  <span>Restextrakt:</span>3.7%
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
