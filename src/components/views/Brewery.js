import classes from "./Brewery.module.css";
import brewZilla from "../pictures/brewzilla.jpeg"
import clevesTomteishPorter from "../pictures/clevestomte-ishPorter.jpeg";
import dens from "../pictures/dens.jpeg";
import santa from "../pictures/santa.jpeg";
import fermentation from "../pictures/fermentation.jpeg";

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
            <img src={clevesTomteishPorter} alt="Cleves Tomte-ish Porter"></img>
          </div>
          <div>
            <img src={dens} alt="testing density beer"></img>
          </div>
          <div>
            <img src={santa} alt="heating foam Santas(candy)"></img>
          </div>
          <div>
            <img src={fermentation} alt="beer fermentation"></img>
          </div>
          <div>
            <img src={fermentation} alt="beer fermentation"></img>
          </div>
          <div>
            <img src={santa} alt="heating foam Santas(candy)"></img>
          </div>
          <div>
            <img src={dens} alt="testing density beer"></img>
          </div>
          <div>
            <img src={clevesTomteishPorter} alt="Cleves Tomte-ish Porter"></img>
          </div>
          <div>
            <img src={brewZilla} alt="a brewZilla"></img>
          </div>
          <div>
            <img src={clevesTomteishPorter} alt="Cleves Tomte-ish Porter"></img>
          </div>
          <div>
            <img src={dens} alt="testing density beer"></img>
          </div>
          <div>
            <img src={dens} alt="testing density beer"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brewery;
