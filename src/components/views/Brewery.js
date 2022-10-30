import classes from "./Brewery.module.css";
import brewZilla from "../pictures/brewzilla.jpeg";
import clevesTomteishPorter from "../pictures/clevestomte-ishPorter.jpeg";
import dens from "../pictures/dens.jpeg";
import santa from "../pictures/santa.jpeg";
import fermentation from "../pictures/fermentation.jpeg";
import transfer1 from "../pictures/transfer1.jpg";
import transfer2 from "../pictures/transfer2.jpg";
import transfer3 from "../pictures/transfer3.jpg";
import carbonic from "../pictures/carbonic.jpg";
import boil from "../pictures/boil.jpg";

const Brewery = () => {
  return (
    <>
      <div className={classes.breweryContent}>
        <h1>Bryggeriet</h1>
        <div className={classes.gallery}>
          <div>
            <img src={brewZilla} alt="a brewZilla"></img>
          </div>
          <div>
            <img src={dens} alt="testing density wort"></img>
          </div>
          <div>
            <img src={santa} alt="heating foam Santas(candy)"></img>
          </div>
          <div>
            <img src={transfer3} alt="transferring beer"></img>
          </div>
          <div>
            <img src={fermentation} alt="beer fermentation"></img>
          </div>
          <div>
            <img src={transfer2} alt="transferring beer"></img>
          </div>
          <div>
            <img src={transfer1} alt="transferring beer"></img>
          </div>
          <div>
            <img src={clevesTomteishPorter} alt="Cleves Tomte-ish Porter"></img>
          </div>
          <div>
            <img src={boil} alt="boiling beer"></img>
          </div>
          <div>
            <img src={carbonic} alt="carbonates beer"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brewery;
