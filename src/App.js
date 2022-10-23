import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Home from "./components/views/Home";
import HowToBrew from "./components/views/HowToBrew";
import MyBeer from "./components/views/MyBeer";
import Brewery from "./components/views/Brewery";
import Porter from "./components/views/beerInformation/Porter";
import Lager from "./components/views/beerInformation/Lager";
import Christmas from "./components/views/beerInformation/Christmas";
import SourAle from "./components/views/beerInformation/SourAle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="howToBrew" element={<HowToBrew />} />
            <Route path="myBeer" element={<MyBeer />} />
            <Route path="brewery" element={<Brewery />} />
            <Route path="porter" element={<Porter />} />
            <Route path="lager" element={<Lager />} />
            <Route path="christmas" element={<Christmas />} />
            <Route path="sourAle" element={<SourAle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
