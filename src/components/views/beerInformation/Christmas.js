import { Link } from "react-router-dom";
import classes from "./Christmas.module.css";
import beerLabel from "../../pictures/etikett tomte.jpg";
import background from "../../pictures/thumbnail_IMG_2177.jpg";

const Christmas = () => {
  return (
    <>
      <div className={classes.christmasMain}>
        <div className={classes.christmasLink}>
          <Link className={classes.christmasLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.christmasContent}>
          <div className={classes.christmasIntro}>
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
                <h1>Cleves Tomte-ish Porter</h1>
                <p className={classes.christmasText}>
                  En Porter lika autentisk och god som vanlig dock med en svensk
                  julig twist i form av en rejäl mängd skumtomtar!
                </p>
              </div>
            </div>
          </div>
          <div className={classes.christmasInfoContainer}>
            <div className={classes.christmasInfo}>
              <div
                style={{
                  backgroundImage: `url( ${background} )`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                }}
              ></div>
              <div>
                <h2>Information om ölen</h2>
                <ul className={classes.christmasUlText}>
                  <li>
                    <span>Stil:</span>Experimentell jul porter.
                  </li>
                  <li>
                    <span>Färg:</span>Svart, stabil skumkrona.
                  </li>
                  <li>
                    <span>Doft:</span>Svag doft av jordgubbar, choklad och
                    kaffe.
                  </li>
                  <li>
                    <span>Smak:</span>Komplex smak av kaffe, vanilj, choklad
                    samt en tydlig karaktär av skumtomtar.
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
      </div>
    </>
  );
};

export default Christmas;
