/* import { Link } from "react-router-dom";
import classes from "./Lager.module.css";
import beerlabel from "../../pictures/etikett lager.jpg";
import background from "../../pictures/thumbnail_IMG_2202.jpg";

const Lager = () => {
  return (
    <>
      <div className={classes.lagerMain}>
        <div className={classes.lagerLink}>
          <Link className={classes.lagerLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.lagerContent}>
          <div className={classes.lagerIntro}>
            <div>
              <img
                src={beerlabel}
                alt="beer label"
                height={190}
                width={190}
              ></img>
            </div>
            <div>
              <div>
                <h1>Den Clevesköldska Lagern</h1>
                <p className={classes.lagerText}>
                  Den Clevesköldska lagern utmanar den traditionella stilen med
                  nya humlesorter från Nya Zeeland och den amerikanska
                  västkosten.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.lagerInfoContainer}>
            <div className={classes.lagerInfo}>
              <div
                style={{
                  backgroundImage: `url( ${background} )`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                }}
              ></div>
              <div>
                <h2>Information om ölen</h2>
                <ul className={classes.lagerUlText}>
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
      </div>
    </>
  );
};

export default Lager; */

import { Link } from "react-router-dom";
import classes from "./Lager.module.css";
import beerLabel from "../../pictures/etikett lager.jpg";
import background from "../../pictures/thumbnail_IMG_2202.jpg";

const Christmas = () => {
  return (
    <>
      <div className={classes.christmasMain}>
        <div className={classes.christmasLink}>
          <Link className={classes.christmasLinkStyle} to="/mybeer">
            Tillbaka
          </Link>
        </div>
        <div className={classes.christmasContainer}>
          <div className={classes.christmasIntro}>
            <div>
              <img src={beerLabel} alt="beer label"></img>
            </div>
            <div className={classes.christmasIntroText}>
              <h1>Den Clevesköldska Lagern</h1>
              <p>
              Den Clevesköldska lagern utmanar den traditionella stilen med
                  nya humlesorter från Nya Zeeland och den amerikanska
                  västkosten.
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

export default Christmas;