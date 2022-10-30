import { Link } from "react-router-dom";
import classes from "./SourAle.module.css";
import beerLabel from "../../pictures/etikett sur.jpg";
import background from "../../pictures/thumbnail_IMG_2177.jpg";

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
                height={190}
                width={190}
              ></img>
            </div>
            <div>
              <div>
                <h1>Cleves speciella Surmust</h1>
                <p className={classes.sourAleText}>
                  En öl gjord på en traditionell bas av malt men med ett
                  tillskott av koncentrerad julmust. Ölen får sin sura smak av
                  en jäst som producerar mjölksyra.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.sourAleInfoContainer}>
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
      </div>
    </>
  );
};

export default SourAle;
