import classes from "./Home.module.css"
import background from "../pictures/pexels-craig-adderley-1557686.jpg"

const Home = () => {
    return (
        <section className={classes.content} style={{ backgroundImage: `url( ${background} )`, backgroundSize:`cover`, backgroundPosition:`center`}}>
            <h1>Öl bryggd med kärlek</h1>
            <p>Är du precis som jag en person med passion för öl och i synnerhet hantverksöl? Då är denna sida helt i din smak! "hembryggning" "exprimentlosta"</p>
        </section>
    );
}

export default Home;