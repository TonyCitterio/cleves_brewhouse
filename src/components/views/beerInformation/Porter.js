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
                    <span>Färg:</span>Mycket klar, mellanmörk med gyllene rött
                    inslag.
                  </li>
                  <li>
                    <span>Doft:</span> Tydlig ton av sött mörkt bröd med inslag
                    av apelsin/mandarin.
                  </li>
                  <li>
                    <span>Smak:</span>Tydlig fyllig maltkropp med klar sötma,
                    låg beska och smak av pomeransskal.
                  </li>
                  <li>
                    <span>Malt:</span>Pale Ale, Vete, Havre, Melanoidin.
                    (Laktos)
                  </li>
                  <li>
                    <span>Humle:</span> Belma, Mosaik, Citra.
                  </li>
                  <li>
                    <span>Jäsning & lagring:</span>Underjäst lager i 12 dagar på
                    12gr. Kyld i 38 dagar.
                  </li>
                  <li>
                    <span>Stamvörtstyrka:</span>(Sockerhalt före jäsning) 14,6%
                  </li>
                  <li>
                    <span>Alkohol %:</span>5,7
                  </li>
                  <li>
                    <span>Tappad:</span>4,3%
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
