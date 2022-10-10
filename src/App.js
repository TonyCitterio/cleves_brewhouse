import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/views/Layout";
import Home from "./components/views/Home";
import HowToBrew from "./components/views/HowToBrew";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="howToBrew" element={<HowToBrew />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
