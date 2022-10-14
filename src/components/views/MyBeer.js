import classes from "./MyBeer.module.css";
import brewZilla from "../pictures/BrewZilla.jpeg";
import beerOne from "../pictures/lottas-bjorkstadens-jul-ale.png";
import beerTwo from "../pictures/lottas-bjorkstadens-special-irish-red.png"
import beerThree from "../pictures/lottas-bjorkstadens-vinter-lager.png"
import beerFour from "../pictures/lottas-dubbelpils-600px.png"
const MyBeer = () => {
  return (
    <>
      <div className={classes.introMyBeer}>
        <div>
          <img src={brewZilla} alt="brewZilla" height={430} width={450}></img>
        </div>
        <div>
          <h1>Mina olika öl</h1>
          <p className={classes.myBeerText}>
            Jag brygde min första öl 2012. Sedan dess har jag bryggt ett antal
            olika sorters öl. <br></br> Jag tycker om att exprimentera mig fram och är
            inte rädd för att prova nya saker för att få fram goda smarker på
            ölet.
          </p>
        </div>
      </div>
      <div className={classes.contentMyBeer}>
        <h2>Di gode</h2>
        <div className={classes.contentMyBeerLabel}>
        <img src={beerOne} alt="beer label" height={200} width={200}></img>
        <img src={beerTwo} alt="beer label" height={200} width={200}></img>
        <img src={beerThree} alt="beer label" height={200} width={200}></img>
        <img src={beerFour} alt="beer label" height={200} width={200}></img>
        </div>
      </div>
    </>
  );
};

export default MyBeer;
