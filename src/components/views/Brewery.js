import classes from "./Brewery.module.css";
import brewZilla from "../pictures/brewzilla.jpeg";
import clevesTomteishPorter from "../pictures/clevestomte-ishPorter.jpeg";
import dens from "../pictures/dens.jpeg";
import santa from "../pictures/santa.jpeg";
import fermentation from "../pictures/fermentation.jpeg";
import picture from "../pictures/thumbnail_IMG_2161.jpg";
import picture2 from "../pictures/thumbnail_IMG_2157.jpg";
import picture3 from "../pictures/thumbnail_IMG_2174.jpg";
import picture4 from "../pictures/thumbnail_IMG_2210.jpg";
import picture5 from "../pictures/2204.jpg";


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
            <img src={picture3} alt="testing density beer"></img>
          </div>
          <div>
            <img src={fermentation} alt="beer fermentation"></img>
          </div>
          <div>
            <img src={picture} alt="beer fermentation"></img>
          </div>
          <div>
            <img src={picture2} alt="heating foam Santas(candy)"></img>
          </div>
          <div>
            <img src={clevesTomteishPorter} alt="Cleves Tomte-ish Porter"></img>
          </div>
          <div>
            <img src={picture5} alt="a brewZilla"></img>
          </div>    
          <div>
            <img src={picture4} alt="Cleves Tomte-ish Porter"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brewery;
