import classes from "./Brewery.module.css"
import background from "../pictures/pexels-cottonbro-5537952.jpg"

const Brewery = () => {
    return (
        <>
        <div className={classes.breweryContent}>
        <h1>Bryggeriet</h1>
        </div>
        <div className={classes.test} style={{backgroundImage: `url(${background})`, backgroundSize:`cover`, backgroundPosition: `center`}}></div>
        </>
    );
}

export default Brewery;