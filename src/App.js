import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Home from "./components/views/Home";
import HowToBrew from "./components/views/HowToBrew";
import MyBeer from "./components/views/MyBeer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="howToBrew" element={<HowToBrew />} />
            <Route path="myBeer" element={<MyBeer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
