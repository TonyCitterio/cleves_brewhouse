import { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import classes from "./HowToBrew.module.css";
import ingredients from "../pictures/ingredients.jpeg";

const HowToBrew = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY !== 0 && window.innerWidth <= 714);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className={classes.introHowToBrew}>
        <div>
          <img
            src={ingredients}
            alt="beer ingredients"
            className={classes.ingredientsImg}
          ></img>
        </div>
        <div>
          <div className={classes.introHowToBrewTextDiv}>
            <h1>Från idé till glas</h1>
            <p className={classes.howToBrewText}>
              Vissa idéer är bara för konstiga för att inte testa. En suröl
              gjord på julmust eller en julöl smaksatt med en rejäl mängd
              skumtomtar. I ett nanobryggeri är batcherna små och möjligheterna
              stora.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.ingredients}>
        <div>
          <h2>Grunderna är de samma!</h2>
        </div>
        <div>
          <h3>Humle</h3>
          <p className={classes.howToBrewText}>
            Det finns olika sorters humle. Och i ölbryggning är det humlen som
            tillför beska, smak och arom.
          </p>
        </div>
        <div>
          <h3>Malt</h3>
          <p className={classes.howToBrewText}>
            Malt är en av de mest grundläggande ingridiensen i ett öl. Det är
            malten som ger ölet dess färg, sötma och kropp.
          </p>
        </div>
        <div>
          <h3>Vatten</h3>
          <p className={classes.howToBrewText}>
            Kvalitén på vattnet har faktiskt betydelse för ölens smak.
            Exempelvis så passar surt vatten till lager och basigt till pale
            ale.
          </p>
        </div>
        <div>
          <h3>Jäst</h3>
          <p className={classes.howToBrewText}>
            Bryggaren tillverkar vörten och jästen skapar ölet!
          </p>
        </div>
      </div>
    </>
  );
};

export default HowToBrew;
