import { Link } from "react-router-dom";
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
                    <span>Färg:</span>Bärnsten med ett vitt stabilt skum.
                  </li>
                  <li>
                    <span>Doft:</span>Frisk med inslag av citrus och torkad
                    frukt.
                  </li>
                  <li>
                    <span>Smak:</span>Aromatisk med balanserad maltighet och
                    beska. Inslag av apelsinskal, rågbröd och örter.
                  </li>
                  <li>
                    <span>Malt:</span>Pale Ale & Caramünch.
                  </li>
                  <li>
                    <span>Humle:</span>Bärnsten med ett vitt stabilt skum.
                  </li>
                  <li>
                    <span>Jäsning & lagring:</span>Underjäst mellanmörk lager,
                    jästid 11 dagar, kylstabiliserad 25 dagar i tank.
                  </li>
                  <li>
                    <span>Stamvörtstyrka:</span>13.5 - 14 % Plato
                  </li>
                  <li>
                    <span>Alkohol %:</span> 5.25 - 6.0
                  </li>
                  <li>
                    <span>Restextrakt:</span> 3.5 - 3.9 %
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

export default Lager;
