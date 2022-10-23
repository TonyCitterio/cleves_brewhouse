import { Link } from "react-router-dom";
import classes from "./Christmas.module.css";
import beerLabel from "../../pictures/lottas-bjorkstadens-jul-ale.png";
import background from "../../pictures/clevestomte-ishPorter.jpeg"

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
            <img
              src={beerLabel}
              alt="beer label"
              height={200}
              width={200}
            ></img>
            <div>
              <h1>Cleves Tomte-ish Porter</h1>
              <p>Ett mustigt julöl med toner av härligt julgodis!</p>
            </div>
          </div>
          <div className={classes.christmasInfo}>
            <div
              style={{
                backgroundImage: `url( ${background} )`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
              }}
            >
            </div>
            <div>
              <h2>Information om ölen</h2>
              {
                <ul>
                  <li>
                    <span>Färg:</span>Nyponröd kopparton med krämigt vitt skum.
                  </li>
                  <li>
                    <span>Doft::</span>Tomte skum, smörkola och karamell.
                  </li>
                  <li>
                    <span>Smak:</span>Tomte skum med ton av karamellmalt.
                  </li>
                  <li>
                    <span>Malt:</span>Pale Ale, Maris Otter, Carared & Roasted
                    Barley.
                  </li>
                  <li>
                    <span>Humle:</span>East Kent Golding i kok. EBU 35
                  </li>
                  <li>
                    <span>Jäsning & lagring:</span>Överjäst röd ale, jästid 8
                    dagar, kyl stabiliserad 30 dagar i tank på +-0 gr.
                  </li>
                  <li>
                    <span>Stamvörtstyrka:</span>13.8% Plato
                  </li>
                  <li>
                    <span>Alkohol %:</span>Alkohol %: 5.2
                  </li>
                  <li>
                    <span>Restextrakt:</span>4.0%
                  </li>
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Christmas;
